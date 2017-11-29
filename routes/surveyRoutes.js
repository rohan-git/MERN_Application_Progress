const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireSurveyCredit');

const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate');

const Survey = mongoose.model('survey');

module.exports = app => {

  app.post('/api/survey', requireLogin, requireCredits,  (req, res) => {

    console.log('--> in /api/survey');

    const { title, subject, body, recipients } = req.body;
    //
    console.log('--> recipients', recipients.split(','));
    // console.log('--> Mailer', Mailer);

    const survey = new Survey({

      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // send survey email right after it gets saved
    const mailer = new Mailer(survey, surveyTemplate(survey));



  });

};
