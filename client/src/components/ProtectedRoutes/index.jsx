import React from 'react';
import { Navigate } from 'react-router-dom';

ProtectedRoutes.propTypes = {};

function ProtectedRoutes(props) {
   console.log('🚀 ~ props', props);
   const { userData } = props;

   const token = localStorage.getItem('access_token');

   if (userData.role.name === 'user' || !token)
      return <Navigate to='/user/login' />;
   return props.children;
}

export default ProtectedRoutes;
