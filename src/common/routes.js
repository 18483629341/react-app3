import React from 'react';
import {BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import LoginPage from "./pages/login";//默认加载login文件下的index.js
import Index from  "./pages/container";

const routes=(
	<Router>
	<div>
	  <Route   path="/index" component={Index}></Route>
		<Route  path="/login" component={LoginPage}></Route>
	  {/*
     return <Redirect from="*" to="/login"></Redirect> */
		}
	</div>

</Router>
)

export default routes;