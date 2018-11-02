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
		let forOldV=(d*this.state.rates.forOld).toFixed(2);
		let forSurV=(d*this.state.rates.forSur).toFixed(2);
		let forFiredV=(d*this.state.rates.forFired).toFixed(2);
		let forHouseV=(d*this.state.rates.forHouse).toFixed(2);
    let salary=(d-forOldV-forSurV-forFiredV-forHouseV).toFixed(2);
    const taxBase = salary-5000;
    let tax;
    if(taxBase <= 0) {
      tax = 0;
    } else if(taxBase > 0 && taxBase <= 1500) {
      tax = taxBase*3/100;
    } else if(taxBase > 1500 && taxBase <= 4500) {
      tax = taxBase*10/100-105;
    } else if(taxBase > 4500 && taxBase <= 9000) {
      tax = taxBase*20/100-555;
    } else if(taxBase > 9000 && taxBase <= 35000) {
      tax = taxBase*25/100-1005;
    } else if(taxBase > 35000 && taxBase <= 55000) {
      tax = taxBase*30/100-2775;
    } else if(taxBase > 55000 && taxBase <= 80000) {
      tax = taxBase*35/100-5505;
    } else if(taxBase > 80000) {
      tax = taxBase*45/100-13505;
    }
    const cleanTax = tax.toFixed(2);
		
		let taxSalary=(salary-cleanTax).toFixed(2);
		this.setState({
      forOldV:forOldV,
      forSurV:forSurV,
      forFiredV:forFiredV,
      forHouseV:forHouseV, 
      salary:salary,
      taxV:cleanTax,
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
          <Input type="number" addonBefore="应发工资" addonAfter="￥" defaultValue= {this.state.wage} onChange={(event)=>this.change(event)} style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="养老保险" addonAfter="￥" defaultValue= {this.state.forOldV} style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="医疗保险" addonAfter="￥" defaultValue= {this.state.forSurV} style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="失业保险" addonAfter="￥" defaultValue= {this.state.forFiredV} style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="住房公积" addonAfter="￥" defaultValue= {this.state.forHouseV} style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="税前工资" addonAfter="￥" defaultValue= {this.state.salary} style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="个人税收" addonAfter="￥" defaultValue= {this.state.taxV} style={{ marginBottom: 20 }}/>
          <Input type="number" addonBefore="税后工资" addonAfter="￥" defaultValue= {this.state.taxSalary} style={{ marginBottom: 20 }}/>
        </Col>
        <Col xs={0} sm={0} md={6} lg={8} style={{ marginBottom: 16 }}>
        </Col>
		  </Row>
    );
  }
}
export default Salary;