import React from 'react';
import './BookInfos.scss';
import { Rate } from 'antd';
import Button from '../../../../components/Button';
import PropTypes from 'prop-types';

BookInfos.propTypes = {
   bookDetail: PropTypes.object.isRequired,
};

function BookInfos(props) {
   const { bookDetail } = props;
   console.log('🚀 ~ bookDetail', bookDetail);
   return (
      <div className='book__infos'>
         <h3 className='book__infos--title'>{bookDetail?.name}</h3>
         <p className='book__infos--author'>{bookDetail?.author}</p>
         <Rate value={bookDetail?.star} disabled />
         <p className='book__infos--description'>
            Voluptate labore ea dolor non aliqua ut qui nisi nisi ullamco ipsum.
            Sit fugiat minim officia duis cupidatat labore irure labore officia
            fugiat eiusmod dolor mollit. Deserunt eiusmod consectetur tempor
            pariatur officia.
         </p>
         <Button
            className='btn btn__blue btn--color--white'
            title='Read Book'
         />
      </div>
   );
}

export default BookInfos;
