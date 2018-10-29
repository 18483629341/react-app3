import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Prompt, Redirect} from "react-router-dom";
                                             //页面跳转时的提醒
import logo from './logo.svg';//引入图片
import './App.css';//引入

import App from './App';
class New extends Component {
  render() {
		return( <div><p>新闻</p> <p>id:{this.props.match.params.id}</p> <p>   {this.props.match.url}</p></div>)
	}
}
class Info extends Component {
  render() {
		return( <div><p>详情页</p> <p>id:{this.props.match.params.type}</p> <p>   {this.props.match.url}</p></div>)
	}
}
class Demo extends Component {
	constructor(){
		super()
		this.state={
			id:100,
			type:"fashion"
		}
	}
  render() {
    return (
			<Router>
				<div>
					<ul>
					 <li><Link to="/home">首页</Link></li>
					 <li><Link to="/new/20">新闻</Link></li>
					 <li><Link to={"/new/"+this.state.id}>新闻</Link></li>
					 <li><Link to={"/info/"+this.state.type}>详情页</Link></li>
					 <li><Link to="/redirect">重定向</Link></li>
					 
					</ul>
					<Route path="/home" component={App}></Route>
					<Route path="/redirect" render={()=><Redirect to="info/new"></Redirect>}></Route>
					<Route path="/new/:id" component={New}></Route>
					<Route path="/info/:type" component={Info}></Route>
					
				</div>
			
			</Router>
      
    );
  }
}

export default Demo;
