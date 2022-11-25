import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {document.body.style.backgroundColor='#1C1E1F'}
    <App/>
  </React.StrictMode>
);
