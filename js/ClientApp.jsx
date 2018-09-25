import React from 'react';
import { render } from 'react-dom';
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'))
}

renderApp(); 

// This is only enabled in development per config
// we call renderApp() whenever App changes
// but under the hood webpack/babel do the smart reloading

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(); 
  });
}
