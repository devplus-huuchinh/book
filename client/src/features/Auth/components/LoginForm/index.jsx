import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import './LoginForm.scss';

LoginForm.propTypes = {};

function LoginForm(props) {
   const { Link, Text } = Typography;

   const onFinish = (values) => {
      console.log('Success:', values);
   };

   const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
   };

   return (
      <>
         <Form
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
            className='login-form'
         >
            <label className='login-form--label'>Username</label>
            <Form.Item
               className='login-form--inputWrap'
               name='username'
               rules={[
                  { required: true, message: 'Please input your username!' },
               ]}
            >
               <Input className='login-form--input' />
            </Form.Item>

            <label className='login-form--label'>Password</label>
            <Form.Item
               className='login-form--inputWrap'
               name='password'
               rules={[
                  { required: true, message: 'Please input your password!' },
               ]}
            >
               <Input.Password className='login-form--input' />
            </Form.Item>

            <div className='login-form--helper'>
               <Form.Item name='remember' valuePropName='checked'>
                  <Checkbox>Remember me</Checkbox>
               </Form.Item>
               <Link>Forgot Password</Link>
            </div>

            <Form.Item>
               <Button
                  type='primary'
                  htmlType='submit'
                  block
                  className='login-form--submit'
               >
                  Sign in
               </Button>
               <Button
                  className='login-form--google'
                  block
                  icon={<GoogleOutlined />}
               >
                  Sign in with Google
               </Button>
            </Form.Item>
            <Form.Item className='login-form--signUp'>
               <Text>Don't have a account? </Text>
               <Link strong>Sign up for free!</Link>
            </Form.Item>
         </Form>
      </>
   );
}

export default LoginForm;
