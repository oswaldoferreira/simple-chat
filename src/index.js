import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let authorName = prompt("Digita seu nick aí jovem:", "");

ReactDOM.render(
  <App authorName={authorName} />,
  document.getElementById('root')
);
