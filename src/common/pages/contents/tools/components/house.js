import React,{Component} from 'react';
import {Input,Row,Col} from "antd";
class House extends Component {
  constructor(props){
    super(props);
    this.state={
      item:'',
      time:'',
      rent:'',
      buy:'',
      balance:'',
      des:'',
      message:''
    }
  }
  changeItem=(e)=>{
    var d=e.target.value;
    this.setState({item:d},()=>{this.changeRent();this.changeBalace()})  
  }
  changeTime=(e)=>{
		var t=e.target.value;
      this.setState({time:t},()=>{ this.changeRent();this.changeBalace()})
  }
  changeRent(){
    let r=this.state.item*this.state.time*12/10000;
    this.setState({
      rent:r
    })
  }
  changeBuy=(e)=>{
    var b=e.target.value;
    this.setState({buy:b},()=>{this.changeBalace()})
  }
  changeBalace(){
    if(!this.state.rent&&!this.state.buy){
      if(this.state.rent>this.state.buy){
        this.setState({
          message:'专家建议，买房划算'
        })
      } else if(this.state.rent===this.state.buy){
        this.setState({
          message:'专家建议，租房买房都一样'
        })
        
      }else{
        this.setState({
          message:'专家建议，租房划算'
        })
      }
    }
  }
  render() {
    return (
      <Row > 
        <div style={{"marginTop":"30px"}}></div>
        <Col xs={0} sm={0} md={6} lg={8}style={{ marginBottom: 16 }}>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} style={{ marginBottom: 16 }}>
          <Input type="number" addonBefore="预计房租" addonAfter="￥" defaultValue= {this.state.item} onChange={(event)=>this.changeItem(event)} style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="预计年数" addonAfter="￥" defaultValue= {this.state.time} onChange={(event)=>this.changeTime(event)} style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="租房合计" addonAfter="￥" defaultValue= {this.state.rent} disabled style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="买房合计" addonAfter="￥" defaultValue= {this.state.buy} onChange={(event)=>this.changeBuy(event)} style={{ marginBottom: 20 }}/>
          <p >{this.message}</p>
        </Col>
        <Col xs={0} sm={0} md={6} lg={8} style={{ marginBottom: 16 }}>
        </Col>
        </Row>
    );
  }
}
export default House;