#!/usr/bin/env node
'use strict'
var currentPrice = require('./current-price.js');
var dayHistory = require('./week-history.js');

if (process.argv.indexOf('-g') !== -1) {
  dayHistory(function(history) {
    console.log(history);
  });
} else {
  currentPrice(function(price) {
    console.log(price);
  });
}
