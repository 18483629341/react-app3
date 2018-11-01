import React,{Component} from 'react';
import {BrowserRouter as  Router,Route} from "react-router-dom";
//Router  在此处绝对不能删除
import {Layout} from "antd";
import Home from  "../contents/home";
import Music from  "../contents/music/music";
import Tools from  "../contents/tools/tools";
import Editor from  "../contents/editor";
import TodoList from  "../contents/todoList";
import Album from  "../contents/album";
import SearchEngine from  "../contents/searchEngine";

const { Content } = Layout;
class Con extends Component {
  render() {
    return (
      <Content style={{ margin: '24px 16px 0' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          <Route  exact path="/index/index" component={Home}></Route>
          <Route path="/index/music" component={Music}></Route>
          <Route path="/index/tools" component={Tools}></Route>
          <Route path="/index/editor" component={Editor}></Route>
          <Route path="/index/todoList" component={TodoList}></Route>
          <Route path="/index/album" component={Album}></Route>
          <Route path="/index/searchEngine" component={SearchEngine}></Route>
          
        </div>
    </Content>
			
    );
  }
}



export default Con;