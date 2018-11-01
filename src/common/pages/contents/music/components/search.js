
import React,{Component} from 'react';
import {Select,DatePicker} from 'antd';
import fetchJsonp from "fetch-jsonp";
const Option = Select.Option;
const {  RangePicker} = DatePicker;
class Search extends Component {
  constructor(props){
    super(props);
    this.state={
      getSearchR:[]
    }
  }
  render() {
    const options1=[
      {name:"Jack",value:"Jack"},
      {name:"Lucy",value:"Lucy"},
      {name:"yiminghe",value:"yiminghe"}
    ];
    const options2=[
      {name:"内地",value:"内地"},
      {name:"Lucy",value:"Lucy"},
      {name:"yiminghe",value:"yiminghe"}
    ];
    const options3=[
      {name:"Jack",value:"Jack"},
      {name:"Lucy",value:"Lucy"},
      {name:"yiminghe",value:"yiminghe"}
    ];
    function handleChange(value) {
      console.log(`selected ${value}`);
    }
    
    function handleBlur() {
      console.log('blur');
    }
    
    function handleFocus() {
      console.log('focus');
    }
    
    function changeTime(date, dateString) {
      console.log(date, dateString);
    }
      
    return (
      <div >
        <p>
          类型(单独搜索)：<Select 
            showSearch
              style={{ width: 200 }}
              placeholder="热歌榜"
              optionFilterProp="children"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                {
                  options1.map((item,i)=>(
                    <Option value={item.value}>{item.name}</Option>
                  ))
                }  
          </Select>
          发行国家：<Select>
                {
                  options2.map((item,i)=>(
                    <Option value={item.value}>{item.name}</Option>
                  ))
                }  
          </Select>
          歌曲语种：<Select>
                {
                  options3.map((item,i)=>(
                    <Option value={item.value}>{item.name}</Option>
                  ))
                }  
          </Select>
          发行时间段：<RangePicker onChange={changeTime} size="big"/>
          
        </p>
		  </div>
    );
  }
}
export default Search;