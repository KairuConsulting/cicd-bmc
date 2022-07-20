import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

var element = React.createElement('h1', { className: 'greeting' }, 'Hello, Black Men and Women Coding!');
ReactDOM.render(element, document.getElementById('root'));

reportWebVitals();
