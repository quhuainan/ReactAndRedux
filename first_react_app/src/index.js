import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ClickCounter from './chapter-01/ClickCounter'
ReactDOM.render(<ClickCounter />, document.getElementById('root'));
registerServiceWorker();
