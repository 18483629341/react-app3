import React,{Component} from 'react';
import { Table,Select} from 'antd';
import fetchJsonp from "fetch-jsonp";
//import Search from "./components/search";
//const { Footer } = Layout;
const Option = Select.Option;
class Music extends Component {
  constructor(props){
    super(props);
    this.state={
      Tdata:[],
      loading:true
    }
  }
  componentDidMount(){
    this.getData('2')
  }
  handleChange(value){
    this.getData(value);
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
      //list=Array.from(new Set(list));
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
        Tdata:arr,
        loading:false
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
    const data = [{name:'热歌榜',id:2},{name:'新歌榜',id:1},{name:'摇滚榜',id:11},{name:'爵士',id:12},{name:'流行',id:16}];
    return (
      
      <div>
        <Select defaultValue={data[0].name} style={{ width: 120,marginBottom:20 }} onChange={(value)=>this.handleChange(value)}>
          {
            data.map((item,index)=><Option value={item.id} key={index}>{item.name}</Option>)
          }
        </Select>
        <Table 
        rowSelection={rowSelection}  
        dataSource={this.state.Tdata} 
        columns={columns}
        loading={this.state.loading} 
        />
        {//加上序号：this.state.Tdata.map((item,index)=>({...item,num:index+1}))
        }
      </div>
		
    );
  }
}



export default Music;