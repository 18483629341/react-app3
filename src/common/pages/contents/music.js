import React,{Component} from 'react';
import { Table,Select} from 'antd';
import fetchJsonp from "fetch-jsonp";
//const { Footer } = Layout;
const Option = Select.Option;
class Music extends Component {
constructor(props){
  super(props);
  this.state={
    Tdata:[]
  }
}
componentDidMount(){
  this.getData('2')
}
getData=(typeId)=>{
  fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=100&offset=0`,{
              method:"GET"
  })
  .then((res)=>{
    return res.json();
  }) 
  .then((res)=>{
    
    var list=res.song_list;
    var arr=[];
    list.map((item,index)=>{
      var obj={};
     // obj['num']=index+1;
      obj['key']=item.artist_id;
      obj['title']=item.album_title;      ;
      obj['author']=item.author;
      obj['country']=item.country;
      obj['language']=item.language;
      obj['publishtime']=item.publishtime;
      arr.push(obj);
    })
    console.log(arr);
    this.setState({
      Tdata:arr
    })
  })
  .catch((error)=>{
    console.log(error);
  })
}

  render() {
    //const dataSource =[];
    
    const columns = [{
            dataIndex: 'num',
            title: '序号',
            width: 50,
        },{
            dataIndex: 'title',
            title: '歌曲名',
            width: 200,
        }, {
            dataIndex: 'author',
            title: '歌手',
            width: 200,
        }, {
            dataIndex: 'country',
            title: '发行国家',
            width: 150,
        }, {
            dataIndex: 'language',
            title: '语种',
            width: 200,
        }, {
            dataIndex: 'publishtime',
            title: '发行时间',
            width: 200,
        }
      ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      //禁用
      /*getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),*/
    }
    const options=[
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
    return (
      <div>
      <Select 
        showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
        {
          options.map((item,i)=>(
            <Option value={item.value}>{item.name}</Option>
          ))
        }  
      </Select>
        <Table rowSelection={rowSelection}  dataSource={this.state.Tdata.map((item,index)=>({...item,num:index+1}))} columns={columns} />

      </div>
		
    );
  }
}



export default Music;