import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import App from '../App';
import _ from 'lodash';

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack!'], ' ');

  var reactHook = document.createElement('div');
  reactHook.id = 'react-hook';
  element.appendChild(reactHook);

  return element;
}
console.log('index.js')
document.body.appendChild(component());


ReactDOM.render(
  <AppContainer>
  <App />
  </AppContainer>,
  document.getElementById('react-hook')
);
if (module.hot) {
  module.hot.accept('../App', () => {
    const NextApp = require('../App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp /> 
      </AppContainer>,
      document.getElementById('react-hook')
    );
  });
}