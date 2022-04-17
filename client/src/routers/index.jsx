import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import ProtectedRoutes from '../components/ProtectedRoutes';
import Admin from '../features/Admin';
import Auth from '../features/Auth';
import BookDetail from '../features/BookDetail';
import Home from '../features/Home';
import Main from '../layouts/Main';

function Routers(props) {
   return (
      <Routes>
         <Route element={<LoadingSpinner />}>
            <Route path='/user/*' element={<Auth />} />
            <Route element={<Main />}>
               <Route
                  path='/admin/*'
                  element={
                     <ProtectedRoutes>
                        <Admin />
                     </ProtectedRoutes>
                  }
               />
               <Route path='/book/*' element={<BookDetail />} />
               <Route path='/*' element={<Home />} />
            </Route>
         </Route>
      </Routes>
   );
}

export default Routers;
