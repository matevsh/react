import React from 'react';
import {createRoot} from 'react-dom/client';
import './main.scss';
import Header from './components/Header/Header.jsx';
import Menu from './components/Menu/Menu.jsx';
import Hotels from './components/Hotels/Hotels.jsx';

const ROOT = createRoot(document.getElementById('root'));
ROOT.render(
    <React.StrictMode>
      <Header />
      <Menu />
      <Hotels />
    </React.StrictMode>,
);
