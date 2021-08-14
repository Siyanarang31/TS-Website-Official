import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { HashRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);


