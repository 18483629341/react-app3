import React from 'react';
import { Breadcrumb} from 'antd';
import {BrowserRouter as Router, Route,  Redirect} from "react-router-dom";
import Home from  "../contents/home";
import Music from  "../contents/music";

class Con extends React.Component {
  render() {
    return (
      <div>
        <Route path="/index/home" component={Home}></Route>
        <Route path="/index/music" component={Music}></Route>
      </div>
			
    );
  }
}



export default Con;