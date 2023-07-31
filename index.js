var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

require('dotenv').config();

var app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(cookieParser());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.all('*', function (req, res) {
  console.log('Method: ', req.method);
  console.log('path: ', req.path);
  console.log('params: ', req.params);
  console.log('query: ', req.query);
  console.log('header: ', req.headers);
  console.log('body: ', req.body);
  res.send('hello world');
})

const port = process.env.PORT || 3000;
console.log('listen at ', port);
app.listen(port);
