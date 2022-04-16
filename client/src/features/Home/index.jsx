import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

function Home(props) {
   return (
      <Routes>
         <Route path='/book' element={<HomePage />} />
         <Route path='/' element={<HomePage />} />
      </Routes>
   );
}

export default Home;
