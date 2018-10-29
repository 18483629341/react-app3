import React, { Component } from 'react';
import logo from './logo.svg';//引入图片
import './App.css';//引入
import { Button,Alert } from 'antd';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      
          <img src={logo} className="App-logo" alt="logo" />
        
          <button size="large" loading block>loading</button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="danger">Danger</Button>
        <Button icon="search">Search</Button>
        <Button type="dashed" shape="circle" icon="search" />
        <Button type="dashed" icon="search">Search</Button>
        <Alert
      message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
      type="warning"
      closable
      
    />
        
        
      </div>
    );
  }
}

export default App;
