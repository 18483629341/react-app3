import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "./pages/login";//默认加载login文件下的index.js
import Index from  "./pages/container";

const routes=(
	<Router>
	<div>
	  
		<Route path="/login" component={LoginPage}></Route>
		<Route path="/index" component={Index}></Route>
		
	</div>

</Router>
)

export default routes;