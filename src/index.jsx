import React from 'react';
import {createRoot} from 'react-dom/client';
import './main.scss';
import App from './App.jsx';

const ROOT = createRoot(document.getElementById('root'));

ROOT.render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
);
