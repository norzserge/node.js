const http = require('http');
const express = require('express');

const app = express();

const firstHandler = (req, res, next) => {
  console.log('First handler');
  next();
};
const secondHandler = (req, res) => {
  console.log('Second handler');
  res.send('Reponse from Express');
};

app.get('/', firstHandler, secondHandler);

app.listen(5000, () => console.log('Server was started on port 5000'));
