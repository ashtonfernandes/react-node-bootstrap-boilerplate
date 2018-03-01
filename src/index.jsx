import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App.jsx';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root')
);