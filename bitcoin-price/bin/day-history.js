var https = require('https');

var options = {
  host: 'api.coindesk.com',
  path: '/headerchart/history',
  method: 'GET'
};

function getWeekHistory(callback) {
  var req = https.request(options, function(res) {
    var data = '';
    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      var json = JSON.parse(data);
      callback(json.d.join(' '));
    });
  });

  req.end();

}

module.exports = getWeekHistory;




