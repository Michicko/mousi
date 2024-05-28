import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './sass/style.scss';

const ROOT = document.getElementById('root')!;

ReactDOM.createRoot(ROOT).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
