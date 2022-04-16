import React from 'react';
import Title from '../../../../../components/Title';
import Book from '../../../../../components/Book';
import './MoreBooks.scss';

function MoreBooks(props) {
   return (
      <div className='more__books'>
         <Title title='More Books' />
         <div className='more__books--wrapper'>
            <div className='more__books--list'>
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
         </div>
      </div>
   );
}

export default MoreBooks;
