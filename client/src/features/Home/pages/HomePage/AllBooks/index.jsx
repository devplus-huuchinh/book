import React from 'react';
import PropTypes from 'prop-types';
import Book from '../../../../../components/Book';
import Title from '../../../../../components/Title';
import Container from '../../../../../layouts/Container';
import './AllBooks.scss';

AllBooks.propTypes = {};

function AllBooks(props) {
   return (
      <section className='section__allbooks'>
         <Container>
            <Title title='All books' />
            <div className='section__allbooks--list'>
               <Book
                  image='https://source.unsplash.com/random'
                  title='Book Name'
                  author='alex'
               />
               <Book
                  image='https://source.unsplash.com/random'
                  title='Book Name'
                  author='alex'
               />
               <Book
                  image='https://source.unsplash.com/random'
                  title='Book Name'
                  author='alex'
               />
               <Book
                  image='https://source.unsplash.com/random'
                  title='Book Name'
                  author='alex'
               />
               <Book
                  image='https://source.unsplash.com/random'
                  title='Book Name'
                  author='alex'
               />
               <Book
                  image='https://source.unsplash.com/random'
                  title='Book Name'
                  author='alex'
               />
               <Book
                  image='https://source.unsplash.com/random'
                  title='Book Name'
                  author='alex'
               />
            </div>
         </Container>
      </section>
   );
}

export default AllBooks;
