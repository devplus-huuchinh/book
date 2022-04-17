import { UserOutlined, BookOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, message, Typography } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authApi from '../../../api/authApi';
import { authActions, authData } from '../../../features/Auth/authSlice';
import './user.scss';

function UserInner(props) {
   const userData = useSelector(authData);
   const dispatch = useDispatch();

   const menu = (
      <Menu>
         <Menu.Item key='1' icon={<UserOutlined />}>
            Profile
         </Menu.Item>
         <Menu.Item key='2' icon={<BookOutlined />}>
            Manage Book
         </Menu.Item>
         <Menu.Item key='3' onClick={onClickLogout} icon={<UserOutlined />}>
            Log Out
         </Menu.Item>
      </Menu>
   );

   async function onClickLogout(e) {
      try {
         const response = await authApi.logout();

         if (response.message !== 'logout_successful')
            return message.error('Something when wrong! Please try again');

         const logoutAction = authActions.logout();
         dispatch(logoutAction);
         localStorage.removeItem('access_token');
         window.location = '/';
      } catch (error) {
         console.log(error);
      }
   }

   return (
      <div className='user__inner'>
         <Avatar size={30}>{userData.name?.split('')[0]}</Avatar>
         <Dropdown overlay={menu} placement='bottomLeft' arrow>
            <Typography.Title level={5}>{userData?.name}</Typography.Title>
         </Dropdown>
      </div>
   );
}

export default UserInner;
