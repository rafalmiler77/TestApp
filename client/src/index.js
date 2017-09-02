import React from 'react';
import ReactDOM from 'react-dom';
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

const App = () => {
  return <div>this is react!!</div>
}
ReactDOM.render(
  <App />,
  document.getElementById('react-hook')
)