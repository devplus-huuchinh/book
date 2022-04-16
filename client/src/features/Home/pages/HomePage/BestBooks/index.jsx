import React, { useEffect, useState } from 'react';
import bookApi from '../../../../../api/bookApi';
// import PropTypes from 'prop-types';
import Book from '../../../../../components/Book';
import Title from '../../../../../components/Title';
import Container from '../../../../../layouts/Container';
import './BestBooks.scss';

// BestBooks.propTypes = {};

function BestBooks(props) {
   const [newBooks, setNewBooks] = useState();

   useEffect(() => {
      const getNewBooks = async () => {
         try {
            const response = await bookApi.getNewBook();
            setNewBooks(response);
         } catch (error) {
            console.log(error);
         }
      };
      getNewBooks();
   }, []);

   return (
      <section className='section__bestbooks'>
         <Container>
            <Title title='New books' />
            <div className='section__bestbooks--list'>
               {newBooks?.map((book) => (
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

export default BestBooks;
