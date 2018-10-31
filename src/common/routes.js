import React from 'react';
import {BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import LoginPage from "./pages/login";//默认加载login文件下的index.js
import Index from  "./pages/container";

let Suburl=null;
const routes=(
	<Router>
	<div>
		<Route   path="/index" component={Index}></Route>
		<Route   path="/login" component={LoginPage}></Route>
		<Route  path="/*" render={
			()=>{
				if(sessionStorage.getItem('name')){
					var url=window.location.href;
					if(url.indexOf("/index/")!==-1){
						Suburl=url.substring(url.indexOf("/index/")+"/index/".split('').length);
						return <Redirect  to={"/index/"+Suburl}></Redirect>
					}else{
						return <Redirect  to="/index"></Redirect>
					}
				}else{
					return <Redirect  to="/login"></Redirect>
				}
			}
		}></Route>
		{/*
			
     return <Redirect from="*" to="/login"></Redirect> */
		}
	</div>

</Router>
)

export default routes;