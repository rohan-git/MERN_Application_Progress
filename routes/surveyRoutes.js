const _ = require('lodash');
const { URL } = require('url');
const Path = require('path-parser');

const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireSurveyCredit');

const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate');

const Survey = mongoose.model('survey');

module.exports = app => {

  app.get('/api/survey/thanks', (req, res) => {

    res.send("Thanks for voting!");

  });

  app.post('/api/survey', requireLogin, requireCredits, async (req, res) => {

    console.log('--> in /api/survey');

    const { title, subject, body, recipients } = req.body;
    //
    console.log('--> recipients', recipients.split(','));
    // console.log('--> Mailer', Mailer);

    const survey = new Survey({

      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      //recipients: recipients.split(',').map( email => { return email.trim() } ),
      //({email}) => {return { email: email.trim() }}),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // send survey email right after it gets saved
    const mailer = new Mailer(survey, surveyTemplate(survey));

    // survey.save().then(()=> {
    //
    //   console.log('--> new survey added to db');
    //
    // });

    try {

     await mailer.send();
     await survey.save();
     req.user.credits -= 1;
     const user = await req.user.save();

     res.send(user);

   } catch (err) {

     res.status(422).send(err);
   }

  });

  app.post('/api/survey/webhook', (req, res) => {

    // console.log(' --> from sendgrid & localtunnel', res);
    console.log(' --> req body', req.body);

    const events =
        _.chain(req.body)
         .map(({email, url}) => {

           if(url){

              console.log('--> (email', email);
              console.log('--> (url', url);

              const pathName = new URL(url).pathname;
              const p = new Path('/api/survey/:surveyId/:choice');

              console.log('--> (pathName', pathName);
              console.log('--> p.test(pathName)', p.test(pathName));

              const match = p.test(pathName);

              if(match){
                return { email, surveyId: match.surveyId, choice: match.choice }
              }
            }
          })
          .compact()
          .uniqBy('email', 'surveyId')
          //.each(event => {
          .each( ({surveyId, email, choice}) => {

            console.log('-->uodating survey in db id: ', surveyId);
            console.log('-->email: ', email);

            Survey.updateOne({
                _id: surveyId,
                recipients: {
                  $elemMatch: { email: email, responded: false }
                }
              },{
                $inc: {[choice]: 1},
                $set: {'recipients.$.responded': true}
            })
            .exec().then((x)=>{
              console.log('-->survey updated in db: ', x);
            });

          })
          .value();

    console.log('-->uniq', events);

    res.send({});

  });

};
