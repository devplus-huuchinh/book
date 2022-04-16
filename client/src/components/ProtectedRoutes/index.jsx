import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authData, authLoadingStatus } from '../../features/Auth/authSlice';

ProtectedRoutes.propTypes = {};

function ProtectedRoutes({ children }) {
   let location = useLocation();
   const userData = useSelector(authData);
   const isLoading = useSelector(authLoadingStatus);
   const token = localStorage.getItem('access_token');

   if (isLoading === false && !token && userData.role?.name !== 'admin')
      return <Navigate to='/user/login' state={{ from: location }} replace />;
   return children;
}

export default ProtectedRoutes;
