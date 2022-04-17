import React from 'react';
import Book from '../../../../../components/Book';
import Title from '../../../../../components/Title';
import Container from '../../../../../layouts/Container';
import './AllBooks.scss';

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
