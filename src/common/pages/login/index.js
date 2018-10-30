
import React from 'react';
//import ReactDOM from 'react-dom';
import { Form, Icon, Input ,Button,notification } from 'antd';
//import { withRouter } from "react-router-dom"; 
import './index.css';
const FormItem = Form.Item;



class Login extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
   // this.props.form.validateFields();
  }
	openNotification = () => {
		notification.open({
			message: 'Notification Title',
			description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
		});
	};
  handleSubmit = (e) => {
    e.preventDefault();
		var name=this.props.form.getFieldsValue().userName;
		var psd=this.props.form.getFieldsValue().password;
		console.log("e");
		if(name==="123"&&psd==="123"){
				//跳转主页面
				localStorage.setItem('name',name);
				localStorage.setItem('token',true);
				this.props.history.push("/index");
		}else{
				//提示
				this.openNotification();
				localStorage.setItem('token',false);
		}
  }

  render() {
		const { getFieldDecorator} = this.props.form;
    return (
			<div className="loginpagewrap" >
				<div className="box">
					<p>Welcome to React</p>
				</div>
				<div className="loginWrap row" >
				<Form onSubmit={this.handleSubmit} className="login-form">
					<FormItem>
						{getFieldDecorator('userName', {
							rules: [{ required: true, message: 'Please input your username!' }],
						})(
							<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
						)}
					</FormItem>
					<FormItem>
						{getFieldDecorator('password', {
							rules: [{ required: true, message: 'Please input your Password!' }],
						})(
							<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
						)}
					</FormItem>
					<FormItem>
					
						<Button type="primary" htmlType="submit" className="login-form-button">
							Log in
						</Button>
					</FormItem>
				</Form>
		   	</div>
		  </div>
    );
  }
}

const LoginPage = Form.create()(Login);

export default LoginPage;