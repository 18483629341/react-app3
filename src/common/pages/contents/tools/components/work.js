import React,{Component} from 'react';
import {Input,Row,Col} from "antd";
class Work extends Component {
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

        <div style={{"marginTop":"30px"}}>Work</div>
        
		  </Row>
    );
  }
}
export default Work;