import React from 'react';
import { Outlet } from 'react-router-dom';
import { Spin } from 'antd';
import { authLoadingStatus } from '../../features/Auth/authSlice';
import { useSelector } from 'react-redux';
import './LoadingSpinner.scss';
import { LoadingOutlined } from '@ant-design/icons';

LoadingSpinner.propTypes = {};

LoadingSpinner.defaultProps = {};

function LoadingSpinner(props) {
   const isLoading = useSelector(authLoadingStatus);

   return (
      <>
         <Spin
            spinning={isLoading}
            className='loading-spinner'
            size='large'
            tip='Loading'
            indicator={<LoadingOutlined />}
         >
            <Outlet />
         </Spin>
      </>
   );
}

export default LoadingSpinner;
