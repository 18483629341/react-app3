import React,{Component} from 'react';
import {Input,Row,Col} from "antd";
class Age extends Component {
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
        <div style={{"marginTop":"30px"}}>Age</div>
        
		  </Row>
    );
  }
}
export default Age;