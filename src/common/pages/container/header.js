
import React from 'react';
//import { Link } from 'react-router-dom'
import { Layout, Menu,  Icon } from 'antd';
import "./header.css";
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
class Top extends React.Component {
  
    state ={
      username:localStorage.getItem('name')
    };
    loginOut= () => {
     localStorage.removeItem('name');
     this.props.history.push("/login");
    }
  render() {
    return (
      <Header style={{ background: '#fff', padding: 0 }}>
      <Icon
          className="trigger"
          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.props.toggle}
        />
      <Menu
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
          className="LoginMenu"
        >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>{this.state.name}123</span></span>}>
            <Menu.Item key="5" className=""><span onClick={this.loginOut}>退出</span></Menu.Item>
           
          </SubMenu>
          
        </Menu>
    </Header>
    );
  }
}



export default Top;