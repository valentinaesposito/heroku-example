var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hi Valentinat! :)');
});

var port = Number(process.env.PORT || 8080);
var server = app.listen(port, function() {
  console.log('Listening on port %d', server.address().port);
});
