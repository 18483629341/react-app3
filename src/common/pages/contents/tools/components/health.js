import React,{Component} from 'react';
import {Input,Row,Col} from "antd";
class Health extends Component {
  constructor(props){
    super(props);
    this.state={
      
      
    }
  }
  handleChange=(e)=>{
    console.log(this.value);
  }
  render() {

    return (
      <Row > 
        <div style={{"marginTop":"30px"}}>Health</div>
       
		  </Row>
    );
  }
}
export default Health;