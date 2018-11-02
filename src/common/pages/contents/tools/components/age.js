import React,{Component} from 'react';
import {  Form,DatePicker,Row,Col,Input,InputGroup } from 'antd';




class Age extends Component {
  constructor(props){
    super(props);
    this.state={
      liveYears:''
    }
  }
  handleChange = (date) => {
    var now=new Date();
    var msGap=(new Date(now)).getTime() - (new Date(date._d.toDateString())).getTime();
    var lives=(msGap/24/60/60/1000/365.242199).toFixed(2);
    this.setState({
      liveYears:lives
    })
    console.log(now,lives);
  }
  render() {
    return (
      <div>
        <Row > 
      
          <Col xs={0} sm={0} md={0} lg={4}style={{ marginBottom: 16 }}>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} style={{ marginBottom: 16 }}>
            您的出生日期：<DatePicker onChange={this.handleChange}/>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} style={{ marginBottom: 16 }}>
            <div style={{ marginBottom: 16 }}>
              <Input addonAfter={<span>年</span>} addonBefore="您已在地球上存活了：" value={this.state.liveYears} />
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={4}style={{ marginBottom: 16 }}>
          </Col>
        </Row>
      </div>       
    )
  }
}
export default Age;