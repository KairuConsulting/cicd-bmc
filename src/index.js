import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// this is a comment typed directly into GitHub
var element = React.createElement('h1', { className: 'greeting' }, 'Hello, Black Men and Women Coding! - Updated for the demo');
ReactDOM.render(element, document.getElementById('root'));

reportWebVitals();
