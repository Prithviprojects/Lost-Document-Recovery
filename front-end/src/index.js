import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Importing the global CSS
import App from './App'; // Importing the App component

// Rendering the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

