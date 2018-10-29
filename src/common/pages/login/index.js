
import React from 'react';
//import ReactDOM from 'react-dom';
import { Form, Icon, Input ,Button,notification ,row,col} from 'antd';
import './index.css';

const FormItem = Form.Item;



class Login extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
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
		if(name=="123"&&psd=="123"){
        //跳转主页面
		}else{
				//提示
				this.openNotification();
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
					<Form layout="inline" onSubmit={this.handleSubmit}  className="col-xs-24">
						<FormItem >
							{getFieldDecorator('userName', {
								rules: [{ required: true, message: 'Please input your username!' }],
							})(
								<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
							)}
						</FormItem>
						<FormItem>
							{getFieldDecorator('password', {
								rules: [{ required: true, message: 'Please input your password!' }],
							})(
								<Input prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="password" />
							)}
						</FormItem>
					
						<Button type="primary" htmlType="submit" className="login-form-button">Login</Button>
					</Form>
		   	</div>
		  </div>
    );
  }
}

const LoginPage = Form.create()(Login);

export default LoginPage;