#!/usr/bin/env node
'use strict'

var https = require('https');

var options = {
  host: 'api.coindesk.com',
  path: '/v1/bpi/currentprice.json',
  method: 'GET'
};

var req = https.request(options, function(res) {
  var data = '';
  res.on('data', function(chunk) {
    data += chunk;
  });

  res.on('end', function() {
    var json = JSON.parse(data);
    console.log(parseFloat(json.bpi.USD.rate).toFixed(2) + '$');
  });
});

req.end();

