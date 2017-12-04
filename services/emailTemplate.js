const keys = require('../config/keys');

module.exports = (survey) => {

  //return ( "<div> Hello " + survey.body  + " </div>" );

  return (` <html>
              <body>
                <div style="text-align: center">
                  <h5> Please Input! </h5>
                  <p> Please answer </p>
                  <p> ${survey.body} </p>
                  <div>
                    <a href="${keys.redirectDomain}/api/survey/${survey.id}/yes">Yes</a>
                  </div>
                  <div>
                    <a href="${keys.redirectDomain}/api/survey//${survey.id}/no">No</a>
                  </div>
                </div>
              </body>
            </html> `);

};
