#!/usr/bin/env node
'use strict'
var currentPrice = require('./current-price.js');

currentPrice(function(price) {
  console.log(price);
});
