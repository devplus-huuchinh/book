import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookDetail from '../features/BookDetail';
import Home from '../features/Home';
import Main from '../layouts/Main';

Routers.propTypes = {};

function Routers(props) {
   return (
      <Routes>
         <Route element={<Main />}>
            <Route path='/book/*' element={<BookDetail />} />
            <Route path='/*' element={<Home />} />
         </Route>
      </Routes>
   );
}

export default Routers;
