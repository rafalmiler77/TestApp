var express = require('express');
var app = express();
var dataFile = require('./data/data.json')

app.set('port', process.env.PORT || 3000)

app.get('/', function (req, res) {
  res.send('<h1>rafael greets you</h1>')
})
app.get('/test', function (req, res) {
  res.send('<h1>test</h1>')
})

var server = app.listen(app.get('port'), function () {
  console.log('====================================');
  console.log('listening on port ' + app.get('port'));
  console.log('====================================');
})