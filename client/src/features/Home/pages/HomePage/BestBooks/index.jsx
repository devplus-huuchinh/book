import React from 'react';
// import PropTypes from 'prop-types';
import Book from '../../../../../components/Book';
import Title from '../../../../../components/Title';
import Container from '../../../../../layouts/Container';
import './BestBooks.scss';

// BestBooks.propTypes = {};

function BestBooks(props) {
   return (
      <section className='section__bestbooks'>
         <Container>
            <Title title='The best books' />
            <div className='section__bestbooks--list'>
               <Book
                  image='https://source.unsplash.com/random'
                  title='Book Name Book Name Book NameBook Name Book Name Book NameBook Name Book Name Book NameBook Name Book Name Book NameBook Name Book Name Book NameBook Name Book Name Book Name '
                  author='alex'
               />
               <Book
                  image='https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
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

export default BestBooks;
