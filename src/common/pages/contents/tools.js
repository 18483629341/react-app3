import React,{Component} from 'react';
import {Tabs} from "antd";
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
        <TabPane tab="工资帽" key="1"><ToolsCon1/></TabPane>
        <TabPane tab="小房租" key="2"><ToolsCon2/></TabPane>
        <TabPane tab="身体指数" key="3"><ToolsCon3/></TabPane>
        <TabPane tab="多大了" key="4"><ToolsCon4/></TabPane>
        <TabPane tab="施工中" key="5" disabled><ToolsCon5/></TabPane>
      </Tabs>
		  </div>
    );
  }
}
class ToolsCon1 extends Component {
  render() {
    return (
      <div >
      ToolsCon1
		  </div>
    );
  }
}

class ToolsCon2 extends Component {
  render() {
    return (
      <div >
      ToolsCon2
		  </div>
    );
  }
}
class ToolsCon3 extends Component {
  render() {
    return (
      <div >
      ToolsCon3
		  </div>
    );
  }
}
class ToolsCon4 extends Component {
  render() {
    return (
      <div >
      ToolsCon4
		  </div>
    );
  }
}
class ToolsCon5 extends Component {
  render() {
    return (
      <div >
      ToolsCon5
		  </div>
    );
  }
}

export default Tools;