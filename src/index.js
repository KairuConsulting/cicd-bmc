import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// this is a comment that we're adding to the code to make a change
var element = React.createElement('h1', { className: 'greeting' }, 'Hello, Black Men and Women Coding! -- this is an updated version of our site');
ReactDOM.render(element, document.getElementById('root'));

reportWebVitals();
// this is a test
