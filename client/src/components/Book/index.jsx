import React from 'react';
import { Rate } from 'antd';
import Button from '../Button';
import './Book.scss';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

Book.propTypes = {
   title: PropTypes.string,
   image: PropTypes.string,
   author: PropTypes.string,
   bookId: PropTypes.number,
};

Book.defaultProps = {
   title: '',
   image: '',
   author: '',
   bookId: 0,
};

function Book(props) {
   const { title, image, author, bookId } = props;
   const navigate = useNavigate();

   const onClickBookDetail = () => {
      navigate(`/book/${bookId}`);
   };
   return (
      <div className='book__wrapper'>
         <div className='book__img'>
            <img src={image} alt={title} />
         </div>
         <div className='book__bottom'>
            <div className='book__info'>
               <h3 onClick={() => onClickBookDetail()}>{title}</h3>
               <p>{author}</p>
            </div>
            <div className='book__inner'>
               <Button
                  className='btn btn__purple btn__view'
                  title='View Book'
                  onClick={() => onClickBookDetail()}
               />
            </div>
         </div>
      </div>
   );
}

export default Book;
