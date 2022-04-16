import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Book from '../../../../../components/Book';
import Title from '../../../../../components/Title';
import Container from '../../../../../layouts/Container';
import './AllBooks.scss';
import bookApi from '../../../../../api/bookApi';

AllBooks.propTypes = {};

function AllBooks(props) {
   const [books, setBooks] = useState([]);

   useEffect(() => {
      const getAllBooks = async () => {
         try {
            const response = await bookApi.getAllBook();
            setBooks(response);
         } catch (error) {
            console.log(error);
         }
      };
      getAllBooks();
   }, []);

   return (
      <section className='section__allbooks'>
         <Container>
            <Title title='All books' />
            <div className='section__allbooks--list'>
               {books?.map((book) => (
                  <Book
                     key={book.id}
                     image='https://source.unsplash.com/random'
                     title={book.name}
                     author={book.author}
                     bookId={book.id}
                  />
               ))}
            </div>
         </Container>
      </section>
   );
}

export default AllBooks;
