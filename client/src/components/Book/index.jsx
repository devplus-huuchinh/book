import React from 'react';
import { Rate } from 'antd';
import Button from '../Button';
import './Book.scss';
import { useNavigate } from 'react-router-dom';

function Book(props) {
   const { title, image, author } = props;
   const navagate = useNavigate();

   const onClickBookDetail = (bookId) => {
      navagate(`/book/${bookId}`);
   };
   return (
      <div className='book__wrapper'>
         <div className='book__img'>
            <img src={image} alt={title} />
         </div>
         <div className='book__bottom'>
            <div className='book__info'>
               <h3>{title} </h3>
               <p>{author}</p>
            </div>
            <div className='book__inner'>
               <Button
                  className='btn btn__purple btn__view'
                  title='View Book'
                  onClick={() => onClickBookDetail('123')}
               />
               <Rate disabled defaultValue={0} />
            </div>
         </div>
      </div>
   );
}

export default Book;
