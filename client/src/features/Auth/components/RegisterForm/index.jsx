import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, Button, Checkbox } from 'antd';
import { GoogleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import './RegisterForm.scss';

RegisterForm.propTypes = {
   handleRegister: PropTypes.func,
};

RegisterForm.defaultProps = {
   handleRegister: null,
};

function RegisterForm(props) {
   const { handleRegister } = props;

   return (
      <>
         <Form
            initialValues={{ agreement: false }}
            onFinish={handleRegister}
            autoComplete='off'
            className='register-form'
         >
            <label className='register-form--label'>Name</label>
            <Form.Item
               className='register-form--inputWrap'
               name='name'
               rules={[{ required: true, message: 'Please input your name!' }]}
            >
               <Input
                  className='register-form--input'
                  placeholder='Enter your name'
               />
            </Form.Item>

            <label className='register-form--label'>Email</label>
            <Form.Item
               className='register-form--inputWrap'
               name='email'
               rules={[
                  { required: true, message: 'Please input your username!' },
               ]}
            >
               <Input
                  className='register-form--input'
                  placeholder='Enter your username'
               />
            </Form.Item>

            <label className='register-form--label'>Password</label>
            <Form.Item
               className='register-form--inputWrap'
               name='password'
               rules={[
                  { required: true, message: 'Please input your password!' },
               ]}
            >
               <Input.Password
                  className='register-form--input'
                  placeholder='Enter your password'
               />
            </Form.Item>

            <label className='register-form--label'>Re-enter Password</label>
            <Form.Item
               className='register-form--inputWrap'
               name='confirmPassword'
               dependencies={['password']}
               hasFeedback
               rules={[
                  {
                     required: true,
                     message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                     validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                           return Promise.resolve();
                        }
                        return Promise.reject(
                           new Error(
                              'The two passwords that you entered do not match!'
                           )
                        );
                     },
                  }),
               ]}
            >
               <Input.Password
                  className='register-form--input'
                  placeholder='Re-enter your password'
               />
            </Form.Item>

            <div className='register-form--helper'>
               <Form.Item
                  valuePropName='checked'
                  name='agreement'
                  rules={[
                     {
                        validator: (_, value) =>
                           value
                              ? Promise.resolve()
                              : Promise.reject(
                                   new Error('Should accept agreement')
                                ),
                     },
                  ]}
               >
                  <Checkbox>I have read the agreement</Checkbox>
               </Form.Item>
            </div>

            <Form.Item>
               <Button
                  type='primary'
                  htmlType='submit'
                  block
                  className='register-form--submit'
               >
                  Sign up
               </Button>
               <Button
                  className='register-form--google'
                  block
                  icon={<GoogleOutlined />}
               >
                  Sign up with Google
               </Button>
            </Form.Item>
         </Form>
      </>
   );
}

export default RegisterForm;
