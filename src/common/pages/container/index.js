
import React from 'react';
import {Link}  from "react-router-dom";
import Top from './header';
import Con from "./content";
//import Foot from "./footer";
import {MenuData} from './../utils/menu';
import './index.css';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class SiderDemo extends React.Component {
 
  state = {
    theme: 'dark',
    current: 'index',
    collapsed: false,
    mode: 'inline',  // 水平垂直展现
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          
        >
          <div className="logo" />
          <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
        {
          MenuData.map((item,index)=>{
            if(item.children&&item.children.length!==0){
              return(
                <SubMenu key={item.icon} title={<span><Icon type={item.icon} /><span>{item.name}</span></span>}>
                {
                  item.children.map((v,i)=>{
                    return (
                      <Menu.Item key={v.icon}><Link to="/index/music">{v.name}</Link></Menu.Item>
                    )
                  })
                }
              </SubMenu>
              )
             
            }else{
              return (
                <Menu.Item key={item.icon}>
                  <Icon type={item.icon}/>
                  <span><Link to="/index/home">{item.name}</Link></span>
                </Menu.Item>
              )
            }
          })
        }
        </Menu>
        </Sider>
        <Layout>
         <Top collapsed={this.state.collapsed} toggle={this.toggle} history={this.props.history}></Top>
         <Con></Con>
          
        </Layout>
        
      </Layout>
    );
  }
}



export default SiderDemo;