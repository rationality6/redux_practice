import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Hello from './components/Hello'
import Questions from './components/Questions'
import Immutable from './components/Immutable'

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <Hello />,
//   document.getElementById('app')
// );

// ReactDOM.render(
//   <Questions />,
//   document.getElementById('questions')
// );

ReactDOM.render(
  <Immutable />,
  document.getElementById('immu')
);
