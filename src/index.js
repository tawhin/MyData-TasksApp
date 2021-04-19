import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Server rendered content
ReactDOM.hydrate(
  <App />,
  document.getElementById('mountNode'),
);