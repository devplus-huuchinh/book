import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../features/Home';

function Routers(props) {
   return (
      <>
         <Routes>
            <Route path="*" element={<Home />} />
         </Routes>
      </>
   );
}

export default Routers;
