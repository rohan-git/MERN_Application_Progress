const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

console.log('keys', keys.mongoURI);
mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req, resp) => {
    resp.write("wee");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
