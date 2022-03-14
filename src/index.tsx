import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

/**
 * @description add browser Router from react- router Dom ffor navigate in global context
 * @author JuanIntriagoVillarreal
 * @version 0.0.0.1
 */

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);