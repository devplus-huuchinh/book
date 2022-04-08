import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../features/Home';
import Main from '../layouts/Main';
import Login from '../features/Auth';

function Routers(props) {
   return (
      <Routes>
         <Route path='/user/*' element={<Login />} />
         <Route element={<Main />}>
            <Route path='/*' element={<Home />} />
         </Route>
      </Routes>
   );
}

export default Routers;
