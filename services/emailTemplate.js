module.exports = (survey) => {

  //return ( "<div> Hello " + survey.body  + " </div>" );

  return (` <html>
              <body>
                <div style="text-align: center">
                  <h5> Please Input! </h5>
                  <p> Please answer </p>
                  <p> {survey.body} </p>
                  <div>
                    <a href="http://localhost:3000">Yes</a>
                  </div>
                  <div>
                    <a href="http://localhost:3000">No</a>
                  </div>
                </div>
              </body>
            </html> `);

};
