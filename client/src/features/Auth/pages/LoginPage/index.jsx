import { Typography } from 'antd';
import React from 'react';
import authApi from '../../../../api/authApi';
import LoginForm from '../../components/LoginForm';
import './LoginPage.scss';

function LoginPage(props) {
   const { Text, Title } = Typography;

   const handleLoginFormSubmit = async (formData) => {
      await authApi.csrfCookie();
      const response = await authApi.login(formData);
      console.log('🏳️‍🌈 ~ response', response);
      localStorage.setItem('access_token', response.access_token);
   };

   return (
      <div className='login-page'>
         <div className='login-page--form'>
            <div className='login-page--title'>
               <Title>Welcome back</Title>
               <Text>Welcome back! Please enter your details.</Text>
            </div>
            <LoginForm handleLoginFormSubmit={handleLoginFormSubmit} />
         </div>
         <div className='login-page--background'>
            <img
               src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
               className='login-page--image'
            />
         </div>
      </div>
   );
}

export default LoginPage;
