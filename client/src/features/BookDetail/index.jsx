import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BookDetailPage from './pages/BookDetailPage';

function BookDetail(props) {
   return (
      <>
         <Routes>
            <Route path='/:bookId' element={<BookDetailPage />} />
         </Routes>
      </>
   );
}

export default BookDetail;
