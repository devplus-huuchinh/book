import './App.css';
import React, { useEffect } from 'react';
import userApi from './api/userApi';
import Routers from './routers';

const App = () => {
   useEffect(() => {
      const getUsersInDb = async () => {
         try {
            const response = await userApi.getUsers();
            console.log('response: ', response);
         } catch (error) {
            console.log(error);
         }
      };
      getUsersInDb();
   }, []);

   return (
      <div className="App">
         <Routers />
      </div>
   );
};

export default App;
