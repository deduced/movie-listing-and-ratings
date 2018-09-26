// @flow

import React from 'react';
import { render } from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const renderApp = () => {
  render(
    <BrowserRouter key={Math.random()}>
      <App />
    </BrowserRouter>,
    document.getElementById('app')
  );
};
renderApp();

=======
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};

renderApp();

// This is only enabled in development per config
// we call renderApp() whenever App changes
// but under the hood webpack/babel do the smart reloading

>>>>>>> v3-10
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
}
