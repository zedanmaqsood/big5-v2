import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

import './index.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

// For Testing API
// import ApiTester from './ApiTester'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
