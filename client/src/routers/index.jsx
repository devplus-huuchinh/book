import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../features/Home';

Routers.propTypes = {};

function Routers(props) {
   return (
      <Routes>
         <Route path='/*' element={<Home />} />
      </Routes>
   );
}

export default Routers;
