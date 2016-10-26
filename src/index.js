import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let authorName = require('random-name')();

ReactDOM.render(
  <App authorName={authorName} />,
  document.getElementById('root')
);
