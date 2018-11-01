import React,{Component} from 'react';
import {Input,Row,Col,message} from "antd";
class Salary extends Component {
  constructor(props){
    super(props);
    this.state={
      
      rates:{
        forOld:0.05,
        forSur:0.03,
        forFired:0.01,
				forHouse:0.1, 
				tax:0.002
      },
      wages:'',
      forOldV:'',
      forSurV:'',
      forFiredV:'',
      forHouseV:'', 
      salary:'',
      taxV:'',
      taxSalary:''
    }
  }
  change=(e)=>{
		var d=e.target.value;
		if(d>=10000){
			message.config({
			 top: 100,
			 duration: 2,
			 maxCount: 1,
		 });
		 message.success('工资过万喽！');
	 }
		let forOldV=d*this.state.rates.forOld;
		let forSurV=d*this.state.rates.forSur;
		let forFiredV=d*this.state.rates.forFired;
		let forHouseV=d*this.state.rates.forHouse;
		let salary=d-forOldV-forSurV-forFiredV-forHouseV;
		let taxV=salary*this.state.rates.tax;
		let taxSalary=salary-taxV;
		this.setState({
      forOldV:forOldV,
      forSurV:forSurV,
      forFiredV:forFiredV,
      forHouseV:forHouseV, 
      salary:salary,
      taxV:taxV,
      taxSalary:taxSalary
		})
  }
  render() {
    return (
      <Row > 
        <div style={{"marginTop":"30px"}}></div>
        <Col xs={0} sm={0} md={6} lg={8}style={{ marginBottom: 16 }}>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} style={{ marginBottom: 16 }}>
          <Input addonBefore="应发工资" addonAfter="￥" defaultValue= {this.state.wage} onChange={(event)=>this.change(event)} style={{ marginBottom: 20 }}/>
          <Input addonBefore="养老保险" addonAfter="￥" defaultValue= {this.state.forOldV} style={{ marginBottom: 20 }}/>
          <Input addonBefore="医疗保险" addonAfter="￥" defaultValue= {this.state.forSurV} style={{ marginBottom: 20 }}/>
          <Input addonBefore="失业保险" addonAfter="￥" defaultValue= {this.state.forFiredV} style={{ marginBottom: 20 }}/>
          <Input addonBefore="住房公积" addonAfter="￥" defaultValue= {this.state.forHouseV} style={{ marginBottom: 20 }}/>
          <Input addonBefore="税前工资" addonAfter="￥" defaultValue= {this.state.salary} style={{ marginBottom: 20 }}/>
          <Input addonBefore="个人税收" addonAfter="￥" defaultValue= {this.state.taxV} style={{ marginBottom: 20 }}/>
          <Input addonBefore="税后工资" addonAfter="￥" defaultValue= {this.state.taxSalary} style={{ marginBottom: 20 }}/>
        </Col>
        <Col xs={0} sm={0} md={6} lg={8} style={{ marginBottom: 16 }}>
        </Col>
		  </Row>
    );
  }
}
export default Salary;