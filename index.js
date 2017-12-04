// express related
const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

// models
require('./models/User');
require('./models/Survey');

// services
require('./services/passport');

// user created
const keys = require('./config/keys');

console.log('mongo uri key --- ', keys.mongoURI);
mongoose.connect(keys.mongoURI);

console.log('cookie key --- ', [keys.cookieKey]);


const app = express();

console.log('started expressJS ... ');

app.use(bodyParser.json());

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

console.log('added passportJS ... ');


// Routes
// need app present beforehand
require('./routes/authRoutes')(app);

require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){

  app.use(express.static('client/build'));

  // Express serves production assets like main.js or main.css file.
  // Express will serve indexhtml if it doesnt see ruote

  const path = require('path');
  app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  });

}

app.get('/', (req, resp) => {
    resp.write("wee");
    console.log('default route');
});

console.log('starting app ... ');

const PORT = process.env.PORT || 5000;
app.listen(PORT);
