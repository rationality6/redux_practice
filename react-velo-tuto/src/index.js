import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Hello from './components/Hello'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Hello />,
  document.getElementById('app')
);
