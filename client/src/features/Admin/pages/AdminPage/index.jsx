import React, { useEffect, useState } from 'react';
import './AdminPage.scss';
import adminApi from '../../../../api/adminApi';
import Container from '../../../../layouts/Container';
import ManageUserTable from '../../components/ManageUserTable';
import { message, Typography } from 'antd';
import SearchUser from '../../components/SearchUser';

function AdminPage(props) {
   const { Title } = Typography;
   const [users, setUsers] = useState([]);
   const [search, setSearch] = useState({
      searchType: 'email',
      searchInput: '',
   });

   useEffect(() => {
      const getAllUsers = async () => {
         try {
            const response = await adminApi.getUsers();
            setUsers(response);
         } catch (error) {
            console.log(error);
         }
      };
      getAllUsers();
   }, []);

   const handleOnClickBlockUser = async (blockUserInfo) => {
      try {
         const response = await adminApi.blockUser(blockUserInfo);
         if (response.message === 'lock_error')
            return message.error('Lock fail, please try again');
         return message.success('Lock user success');
      } catch (error) {
         console.log(error);
      }
   };

   const handleChangeSearch = (key, value) => {
      setSearch((prev) => {
         return {
            ...prev,
            [key]: value.toLowerCase(),
         };
      });
   };

   const userFilter = () => {
      if (search.searchType === 'email') {
         return users.filter((user) =>
            user.email.toLowerCase().includes(search.searchInput)
         );
      }

      return users.filter((user) =>
         user.name.toLowerCase().includes(search.searchInput)
      );
   };

   return (
      <>
         <Container>
            <div className='admin-page'>
               <Title level={2}>Admin Manage Users</Title>
               <SearchUser
                  handleChangeSearch={handleChangeSearch}
                  search={search}
               />
               <ManageUserTable
                  users={userFilter()}
                  handleOnClickBlockUser={handleOnClickBlockUser}
                  className='admin-page--table'
               />
            </div>
         </Container>
      </>
   );
}

export default AdminPage;
