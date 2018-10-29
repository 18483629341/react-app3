import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from "./common/routes";
import "antd/dist/antd.css";
//import App from './App';
//import Demo from './demo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<div>
	   {routes}
	</div>
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
