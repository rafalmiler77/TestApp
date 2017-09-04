const express = require('express');
const dataFile = require('../client/data/data.json');

const app = express();

app.set('testData', dataFile);
app.set('port', process.env.PORT || 53764);
// main route:
// app.get('/', (req, res) => {
//   res.send('<h1>rafael greets you, this is TestApp</h1>');
// });
app.get('/test', (req, res) => {
  res.send('<h1>Test</h1>');
});

app.use(require('../client/src/test2.js'));

app.use(express.static('../client/public'));
app.use('/client', express.static('../client'));
app.use('/admin', express.static('../client/admin'));

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
(() => {
  // Step 1: Create & configure a webpack compiler
  const webpack = require('webpack');
  const webpackConfig = require(process.env.WEBPACK_CONFIG ? process.env.WEBPACK_CONFIG : '../client/webpack.config.js');
  const compiler = webpack(webpackConfig);

  // Step 2: Attach the dev middleware to the compiler & the server
  app.use(require("webpack-dev-middleware")(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  // Step 3: Attach the hot middleware to the compiler & the server
  app.use(require("webpack-hot-middleware")(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));
})();

const server = app.listen(app.get('port'), () => {
  console.log('====================================');
  console.log(`listening on port ${app.get('port')}`);
  console.log('====================================');
});