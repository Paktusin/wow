import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';

const rootElement = document.getElementById("root");
ReactDOM[rootElement.hasChildNodes() ? 'hydrate' : 'render'](<App/>, rootElement);
