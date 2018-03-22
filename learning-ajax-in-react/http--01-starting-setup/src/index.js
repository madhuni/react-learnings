import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';

/* Setting the default settings for the application */
axios.defaults.baseURL = 'http://0.0.0.0:5000/api/';
axios.defaults.headers.common['X-Api-Key'] = 'A21D1036A4F646B5A649FF8C2D618E46';

/* Using the Interceptors for any REQUEST and RESPONSE */
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  console.log(error.response);
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  console.log(error.response);
  return Promise.reject(error);
});


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
