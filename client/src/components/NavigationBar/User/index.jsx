import React from 'react';
import { Avatar, Menu, Dropdown, message, Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './user.scss';

const menu = (
   <Menu>
      <Menu.Item key='1' icon={<UserOutlined />}>
         Profile
      </Menu.Item>
      <Menu.Item key='3' onClick={handleMenuClick} icon={<UserOutlined />}>
         Log Out
      </Menu.Item>
   </Menu>
);
function handleMenuClick(e) {
   console.log('🚀 ~ file: index.jsx ~ line 22 ~ handleMenuClick ~ đ');
}
function UserInner(props) {
   return (
      <div className='user__inner'>
         <Avatar size={30} icon={<UserOutlined />} />
         <Dropdown overlay={menu} placement='bottomLeft' arrow>
            <Typography.Title level={5}>User Name</Typography.Title>
         </Dropdown>
      </div>
   );
}

export default UserInner;
