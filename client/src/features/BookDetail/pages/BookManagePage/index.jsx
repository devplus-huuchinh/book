import { Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import bookApi from '../../../../api/bookApi';
import Container from '../../../../layouts/Container';
import BookManageTable from '../../components/BookManageTable';
import './BookManagePage.scss';

function BookManagePage(props) {
   const { Title } = Typography;

   const [books, setBooks] = useState([]);

   useEffect(() => {
      const getBooksInDb = async () => {
         try {
            const response = await bookApi.getAllBook();
            console.log('🚀 ~ response', response);
            setBooks(response);
         } catch (error) {
            console.log(error);
         }
      };
      getBooksInDb();
   }, []);

   return (
      <Container>
         <div className='book-manage'>
            <Title level={2}>Manage Book</Title>
            <BookManageTable books={books} />
         </div>
      </Container>
   );
}

export default BookManagePage;
