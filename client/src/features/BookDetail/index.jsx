import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookDetailPage from './pages/BookDetailPage';
import BookManagePage from './pages/BookManagePage';

function BookDetail(props) {
   return (
      <>
         <Routes>
            <Route path='/manage' element={<BookManagePage />} />
            <Route path='/:bookId' element={<BookDetailPage />} />
         </Routes>
      </>
   );
}

export default BookDetail;
