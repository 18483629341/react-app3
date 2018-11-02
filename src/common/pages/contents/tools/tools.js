import React,{Component} from 'react';
import {Tabs} from "antd";
import Salary from "./components/salary";
import House from "./components/house";
import Health from "./components/health";
import Age from "./components/age";
import Work from "./components/work";
import './tools.css'
const TabPane = Tabs.TabPane;
//const { Footer } = Layout;
class Tools extends Component {
  callback=(key)=>{
    console.log(key);
  }

  render() {
    
    return (
			<div >
			<Tabs defaultActiveKey="1" onChange={this.callback} size="big">
        <TabPane tab="工资帽" key="1"><Salary/></TabPane>
        <TabPane tab="小房租" key="2"><House/></TabPane>
        <TabPane tab="身体指数" key="3"><Health/></TabPane>
        <TabPane tab="多大了" key="4"><Age/></TabPane>
        <TabPane tab="施工中" key="5" disabled><Work/></TabPane>
      </Tabs>
		  </div>
    );
  }
}

export default Tools;