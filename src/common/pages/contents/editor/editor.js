import React,{Component} from 'react';
import { Row,Col,Card} from 'antd';
import {Editor} from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//const markup = draftToMarkdown(contentState, hashConfig, customEntityTransform, config);

class EditorCom extends Component {
  constructor(props){
    super(props);
    this.state={
      editorState:EditorState.createEmpty(),
      editorContent:''
    }

  }
  onEditorStateChange=(editorState)=>{
    console.log(editorState);
    this.setState({
      editorState:editorState,
    })
  }
  onEditorChange=(editorContent)=>{
    console.log('cc');
    this.setState({
      editorContent:editorContent
    })
  }
  render() {
    const {editorState,editorContent}=this.state;
    return (
			<div >
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
           //编辑状态改变
          onEditorStateChange={this.onEditorStateChange}
          //内容改变
          onContentStateChange={this.onEditorChange}
        />
        
        <Row>
          <Col xs={24} sm={24} md={12} lg={8} style={{ marginBottom: 16 }}>
            <Card title="同步转换HTML" bordered={true}>
              <pre>{ draftToHtml(editorContent)}</pre>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} style={{ marginBottom: 16 }}>
            <Card title="同步转换MarkDown" bordered={true}>
              <pre style={{whiteSpace: 'pre-wrap'}}>{draftToMarkdown(editorContent)}</pre>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} style={{ marginBottom: 16 }}>
            <Card title="同步转换JSON" bordered={true}>
              <pre style={{whiteSpace: 'normal'}}>{JSON.stringify(editorContent)}</pre>
            </Card>
          </Col>
        </Row>
       
      </div>
      
    );
  }
}



export default EditorCom;