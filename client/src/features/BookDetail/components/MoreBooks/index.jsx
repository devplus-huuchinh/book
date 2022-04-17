import React from 'react';
import Book from '../../../../components/Book';
import Title from '../../../../components/Title';
import './MoreBooks.scss';

function MoreBooks(props) {
   const { moreBook } = props;

   return (
      <div className='more__books'>
         <Title title='More Books' />
         <div className='more__books--wrapper'>
            <div className='more__books--list'>
               {moreBook?.map((book) => (
                  <Book
                     key={book.id}
                     image='https://source.unsplash.com/random'
                     title={book.name}
                     author={book.author}
                     bookId={book.id}
                  />
               ))}
            </div>
         </div>
      </div>
   );
}

export default MoreBooks;
