import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer as ReactHotLoader } from 'react-hot-loader'
import App from '../App';
import _ from 'lodash';

// function component() {
//   var element = document.createElement('div');

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

//   var reactHook = document.createElement('div');
//   reactHook.id = 'react-hook';
//   element.appendChild(reactHook);

//   return element;
// }
function rootDocument() {
  var reactHook = document.createElement('div');
  reactHook.id = 'react-hook';
  return reactHook;
}
console.log('index.js')
document.body.appendChild(rootDocument());

ReactDOM.render(
  <ReactHotLoader>
  <App />
  </ReactHotLoader>,
  document.getElementById('react-hook')
);
if (module.hot) {
  module.hot.accept('../App', () => {
    const NextApp = require('../App').default;
    ReactDOM.render(
      <ReactHotLoader>
        <NextApp /> 
      </ReactHotLoader>,
      document.getElementById('react-hook')
    );
  });
}