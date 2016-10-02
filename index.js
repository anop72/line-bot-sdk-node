'use strict';

const
  bodyParser = require('body-parser'),
  config = require('config'),
  crypto = require('crypto'),
  express = require('express'),
  https = require('https'),
  request = require('request');

var app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(bodyParser.json({ verify: verifyRequestSignature }));
app.use(express.static('public'));

const CHANNEL_ID = (process.env.CHANNEL_ID) ?
  process.env.CHANNEL_ID :
  config.get('channelId');

const CHANNEL_SECRET = (process.env.CHANNEL_SECRET) ?
  process.env.CHANNEL_SECRET :
  config.get('channelSecret');

const CHANNEL_TOKEN = (process.env.CHANNEL_TOKEN) ?
  process.env.CHANNEL_TOKEN :
  config.get('channelAccessToken');

if (!(CHANNEL_ID && CHANNEL_SECRET && CHANNEL_TOKEN)) {
  console.error("Missing config values");
  process.exit(1);
}

app.post('/webhook', function(req, res) {
  res.sendStatus(200);
});

function verifyRequestSignature(req, res, buf) {
  let signature = req.headers["x-line-signature"];
}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app;
