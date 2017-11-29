const sendgrid = require('sendgrid');
const helper = sendgrid.mail; // `helper` name is used thruout sendgrid documentation

const keys = require('../config/keys');


class Mailer extends helper.Mail {

  // can be any obj with {subject, recipients}
  // used with Survey db model to pull these 2 properties from it
  constructor({subject, recipients}, content){
    super();

    console.log('--> mailer constructor');

    this.sgAPI = sendgrid(keys.sendGridKey);

    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);

    this.addClickTracking();
    this.addRecipients();

    this.send();
  }

  // formatAddresses(recipients){
  //
  //   const x = recipients.map(recipient => return new helper.Email(recipient.email));
  //
  //   console.log('recipients', x);
  //
  //   return x;
  // }

  formatAddresses(recipients) {
  const x = recipients.map(({ email }) => {
     return new helper.Email(email);
   });

   console.log('recipients', x);

   return x;
 }

  addClickTracking(){

    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);

  }

  addRecipients(){

    const personalize = this.recipients.forEach(recipient => {

      personalize.addTo(recipient);

    });

    this.addPersonalization(personalize);

  }

  async send(){

    console.log(' --> sending', this.toJSON());

    const request = this.sgAPI.emptyRequest({
      method: 'POST',
      path: 'v3/mail/send',
      body: this.toJSON()
    });

    const response = await this.sgAPI.API(request);
    return response;

  }
}


module.exports = Mailer;
