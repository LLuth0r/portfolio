import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();