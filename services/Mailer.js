const passport = require('sendgrid');
const helper = sendgrid.mail; // `helper` name is used thruout sendgrid documentation

const keys = require('../config/keys');


class Mailer extends helper.Mail {

  // can be any obj with {subject, recipients}
  // used with Survey db model to pull these 2 properties from it
  constructor({subject, recipients}, content){
    super();

    this.sgAPI = sendgrid(keys.sendGridKey);

    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body);

    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients){

    return recipients.map({email}) => {
      return new helper.Email(email);
    }
  }

  addClickTracking(){

    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clicktracking);
    this.addTrackingSettings(trackingSettings);

  }

  addRecipients(){

    const personalize = this.recipients.forEach(recipient => {

      personalize.addTo(recipient);

    });

    this.addPersonalization(personalize);

  }

  async send(){

    const request = sgAPI.emptyRequest({
      method: 'POST',
      path: 'v3/mail/send',
      body: this.toJSON()
    });

    const response = await this.sgAPI.API(request);
    return response;

  }
}


module.exports = Mailer;
