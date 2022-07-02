import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import store from './store/store'
import { Provider } from 'react-redux'

// BrowserRouter kullanıyordum fakat plesk apache vs sunucuda çalışmadı
// HashRouter # kullanım apache nginx vs ..
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


reportWebVitals();
