'use strict';

const
  bodyParser = require('body-parser'),
  express = require('express'),
  https = require('https'),
  request = require('request');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
