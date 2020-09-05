//import react
import React from 'react';
//import render method
import { render } from 'react-dom';
//import app component
import { App } from './components/App';
//import service worker
import * as serviceWorker from './serviceWorker';

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
