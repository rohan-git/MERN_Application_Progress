const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'hello there! sample application 1st change!'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
