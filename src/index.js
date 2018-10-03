import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * rendering the root component i.e the <App />  AppComponent 
 */
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
