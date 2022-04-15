import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookDetail from '../features/BookDetail';
import Home from '../features/Home';
import Main from '../layouts/Main';
import Auth from '../features/Auth';
import LoadingSpinner from '../components/LoadingSpinner';

function Routers(props) {
   return (
      <Routes>
         <Route element={<Main />}>
            <Route path='/book/*' element={<BookDetail />} />
            <Route path='/*' element={<Home />} />
         </Route>
         <Route element={<LoadingSpinner />}>
            <Route path='/user/*' element={<Auth />} />
            <Route element={<Main />}>
               <Route path='/*' element={<Home />} />
            </Route>
         </Route>
      </Routes>
   );
}

export default Routers;
