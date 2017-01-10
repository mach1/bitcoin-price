var http = require('http');

var options = {
  host: 'api.coindesk.com',
  path: '/v1/bpi/currentprice.json'
};

function getCurrentPrice(currency, callback) {
  var req = http.request(options, function(res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      var json = JSON.parse(data);
      callback(parseFloat(json.bpi[currency].rate).toFixed(2) + ' ' + currency);
    });

    res.on('error', function() {
      callback('Coindesk not available');
    });
  });

  req.end();
}

module.exports = getCurrentPrice;
