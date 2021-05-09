import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';


axios.defaults.baseURL = 'https://localhost:44326/api/';
ReactDOM.render(
  <Router><App /></Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
