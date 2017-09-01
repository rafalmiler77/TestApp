const express = require('express');

const app = express();
const dataFile = require('../client/data/data.json');

app.set('testData', dataFile);
app.set('port', process.env.PORT || 53764);

app.get('/', (req, res) => {
  res.send('<h1>rafael greets you, this is TestApp</h1>');
});
app.get('/test', (req, res) => {
  res.send('<h1>Test</h1>');
});

const server = app.listen(app.get('port'), () => {
  console.log('====================================');
  console.log(`listening on port ${app.get('port')}`);
  console.log('====================================');
});

app.use(require('../client/src/test2.js'));

app.use(express.static('../client/public'));
app.use('/client', express.static('../client'));
app.use('/admin', express.static('../client/admin'));
