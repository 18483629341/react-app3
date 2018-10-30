import React,{Component} from 'react';
import {Row,Col,Card,Icon} from 'antd';
import EchartsProjects   from './echartsProjects';
import EchartsProjects2   from './echartsProjects2';
//import $ from 'jquery'; //放在全局 request.js中
import {get ,post}from './../utils/request';
//const { Footer } = Layout;
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      echartData:[]
    }
  }
  getData=()=>{
    get('/echarts_info').then((res)=>{
      console.log(res);
      var data=JSON.parse(res);
      if(data.code===200){
        this.setState({echartData:data.result});
      }
      }
    ).catch((error)=>{
      console.log(error);
    });
  }
  componentDidMount(){
    this.getData();
  }
  render() {
    return (
      <div>
      <Row gutter={10} type="flex" justify="space-between" align="bottom">
                <Col xs={24} sm={24} md={12} lg={6}>
                    <div className="cloud-box">
                        <Card>
                            <div className="clear y-center">
                                <div className="pull-left mr-m">
                                    <Icon type="heart" className="text-2x red-6" />
                                </div>
                                <div className="clear">
                                    <div className="text-muted">收藏</div>
                                    <h2>301</h2>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="cloud-box">
                        <Card>
                            <div className="clear y-center">
                                <div className="pull-left mr-m">
                                    <Icon type="cloud" className="text-2x" />
                                </div>
                                <div className="clear">
                                    <div className="text-muted">云数据</div>
                                    <h2>30122</h2>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <div className="cloud-box">
                        <Card>
                            <div className="clear y-center">
                                <div className="pull-left mr-m">
                                    <Icon type="camera" className="text-2x text-info" />
                                </div>
                                <div className="clear">
                                    <div className="text-muted">照片</div>
                                    <h2>802</h2>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="cloud-box">
                        <Card>
                            <div className="clear y-center">
                                <div className="pull-left mr-m">
                                    <Icon type="mail" className="text-2x text-success" />
                                </div>
                                <div className="clear">
                                    <div className="text-muted">邮件</div>
                                    <h2>102</h2>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <div className="cloud-box">
                        <Card className={'no-padding'}>
                            <EchartsProjects option={this.state.echartData}/>
                        </Card>
                    </div>
                </Col>
            </Row>

            <Row gutter={10} type="flex" justify="space-between" align="bottom">
                <Col xs={24} sm={24} md={12} lg={6}>
                    <div className="cloud-box">
                        <Card>
                            <div className="clear y-center">
                                <div className="pull-left mr-m">
                                    <Icon type="heart" className="text-2x text-danger" />
                                </div>
                                <div className="clear">
                                    <div className="text-muted">收藏</div>
                                    <h2>301</h2>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="cloud-box">
                        <Card>
                            <div className="clear y-center">
                                <div className="pull-left mr-m">
                                    <Icon type="cloud" className="text-2x" />
                                </div>
                                <div className="clear">
                                    <div className="text-muted">云数据</div>
                                    <h2>30122</h2>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={12} lg={6}>
                    <div className="cloud-box">
                        <Card>
                            <div className="clear y-center">
                                <div className="pull-left mr-m">
                                    <Icon type="camera" className="text-2x text-info" />
                                </div>
                                <div className="clear">
                                    <div className="text-muted">照片</div>
                                    <h2>802</h2>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="cloud-box">
                        <Card>
                            <div className="clear y-center">
                                <div className="pull-left mr-m">
                                    <Icon type="mail" className="text-2x text-success" />
                                </div>
                                <div className="clear">
                                    <div className="text-muted">邮件</div>
                                    <h2>102</h2>
                                </div>
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                    <div className="cloud-box">
                        <Card className={'no-padding'}>
                        <EchartsProjects2 />
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row gutter={10} type="flex" justify="space-between" align="bottom">
                <Col xs={24} sm={24} md={12} lg={6}>
                    <div className="cloud-box">
                        <Card className={'no-padding'}>
                          
                        </Card>
                    </div>
              </Col>
            </Row>
  </div>
    );
  }
}



export default Home;