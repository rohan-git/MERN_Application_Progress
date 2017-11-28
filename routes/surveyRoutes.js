const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplate');

const Survey = mongoose.model('Survey');

module.exports = app => {

  app.post('/api/survey', requireLogin, requireCredits,  (req, res) => {

    const { title, subject, body, recipients } = req.body;

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
