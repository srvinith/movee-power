import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import '../../node_modules/react-multi-carousel/lib/styles.css'
import '../node_modules/react-multi-carousel/lib/styles.css'
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/aos/dist/aos.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

);


