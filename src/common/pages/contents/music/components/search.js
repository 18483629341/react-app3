
import React,{Component} from 'react';
import {Row,Col,Button,Select,DatePicker} from 'antd';
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
      {name:"热歌榜",value:"hot"},
      {name:"新歌榜",value:"Lucy"},
      {name:"摇滚榜",value:"yiminghe"},
      {name:"爵士榜",value:"yiminghe"},
      {name:"流行",value:"yiminghe"}
    ];
    const options2=[
      {name:"内地",value:"内地"},
      {name:"",value:"Lucy"},
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
    function reset(){

    }
    function search(){

    } 
    return (
      <div >
        <Row>
          <Col xs={24} sm={24} md={12} style={{ marginBottom: 16 }}>
            类型(单独搜索)：
            <Select 
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
          </Col>
          <Col xs={24} sm={24} md={12} style={{ marginBottom: 16 }}>
            发行国家：
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="全国"
              optionFilterProp="children"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                {
                  options2.map((item,i)=>(
                    <Option value={item.value}>{item.name}</Option>
                  ))
                }  
            </Select>
          </Col>
         
          <Col xs={24} sm={24} md={12} style={{ marginBottom: 16 }}>
            歌曲语种：
            <Select
            showSearch
            style={{ width: 200 }}
            placeholder="歌曲语种"
            optionFilterProp="children"
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
              {
                options3.map((item,i)=>(
                  <Option value={item.value}>{item.name}</Option>
                ))
              }  
            </Select>
          </Col>
          <Col xs={24} sm={24}  style={{ marginBottom: 16 }}>
            发行时间段：<RangePicker onChange={changeTime} size="big"/>
            <Button icon="redo" onClick={reset}>重置</Button>
            <Button icon="search" onClick={search}>Search</Button>
          </Col>
        </Row>
		  </div>
    );
  }
}
export default Search;