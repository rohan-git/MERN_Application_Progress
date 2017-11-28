const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

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

// need app present beforehand
require('./routes/authRoutes')(app);

require('./routes/billingRoutes')(app);

app.get('/', (req, resp) => {
    resp.write("wee");
    console.log('default route');
});

console.log('starting app ... ');

const PORT = process.env.PORT || 5000;
app.listen(PORT);
