import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


ReactDOM.render(
  <React.StrictMode>
    <AnimatePresence>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </AnimatePresence>
  </React.StrictMode>,
  document.getElementById('root')
);