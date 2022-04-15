import { message, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import authApi from '../../../../api/authApi';
import RegisterForm from '../../components/RegisterForm';
// import PropTypes from 'prop-types';
import './RegisterPage.scss';

RegisterPage.propTypes = {};

function RegisterPage(props) {
   const { Text, Title } = Typography;

   const handleRegister = async (formData) => {
      try {
         delete formData.agreement;
         delete formData.confirmPassword;
         const registerResponse = await authApi.register(formData);

         if (registerResponse.error?.validator?.excludeUnvalidatedArrayKeys)
            return message.error('Email already exist!');

         if (!registerResponse.error) {
            message.success('Register success, please login.');
            window.location = '/user/login';
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <>
         <div className='register-page'>
            <div className='register-page--form'>
               <div className='register-page--title'>
                  <Title>Get's started!</Title>
                  <Text>Already have a account? </Text>
                  <Link to='/user/login'>Log in.</Link>
               </div>
               <RegisterForm handleRegister={handleRegister} />
            </div>
            <div className='register-page--background'>
               <img
                  src='https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
                  className='register-page--image'
               />
            </div>
         </div>
      </>
   );
}

export default RegisterPage;
