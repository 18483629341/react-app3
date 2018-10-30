import React from 'react';
import {BrowserRouter as  Route} from "react-router-dom";
import {Layout} from "antd";
import Home from  "../contents/home";
import Music from  "../contents/music";
const { Content } = Layout;
class Con extends React.Component {
  render() {
    return (
      <Content>
         CON
        <Route path="/index/home" component={Home}></Route>
        <Route path="/index/music" component={Music}></Route>
      </Content>
			
    );
  }
}



export default Con;