import React from 'react';
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import { authLoadingStatus } from '../../features/Auth/authSlice';
import { useSelector } from 'react-redux';

LoadingSpinner.propTypes = {};

LoadingSpinner.defaultProps = {};

function LoadingSpinner(props) {
   const isLoading = useSelector(authLoadingStatus);

   return (
      <>
         <Spin spinning={isLoading}>
            <Outlet />
         </Spin>
      </>
   );
}

export default LoadingSpinner;
