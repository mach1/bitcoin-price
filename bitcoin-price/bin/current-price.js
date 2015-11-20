var https = require('https');

var options = {
  host: 'api.coindesk.com',
  path: '/v1/bpi/currentprice.json',
  method: 'GET'
};

function getCurrentPrice(callback) {
  var req = https.request(options, function(res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      var json = JSON.parse(data);
      callback(parseFloat(json.bpi.USD.rate).toFixed(2) + '$');
    });

    res.on('error', function() {
      callback('Coindesk not available');
    });
  });

  req.end();
}

module.exports = getCurrentPrice;
