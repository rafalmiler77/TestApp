var express = require('express');
var app = express();
var dataFile = require('../client/data/data.json')

app.set('port', process.env.PORT || 53764)

app.get('/', function (req, res) {
  res.send('<h1>rafael greets you, this is TestApp</h1>')
})
app.get('/test', function (req, res) {
  res.send('<h1>test</h1>')
})

var server = app.listen(app.get('port'), function () {
  console.log('====================================');
  console.log('listening on port ' + app.get('port'));
  console.log('====================================');
})