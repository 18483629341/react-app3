import React from 'react';
import {BrowserRouter as Router, Route,  Redirect} from "react-router-dom";

import LoginPage from "./pages/login";//默认加载login文件下的index.js

const routes=(
	<Router>
	<div>
	  <Redirect from="*" to="/login"></Redirect>
		<Route path="/login" component={LoginPage}></Route>
		
	</div>

</Router>
)

export default routes;