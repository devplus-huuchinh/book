import React from 'react';
import PropTypes from 'prop-types';
import './BookInfos.scss';
import { Rate } from 'antd';
import Button from '../../../../../components/Button';
BookInfos.propTypes = {};

function BookInfos(props) {
   return (
      <div className='book__infos'>
         <h3 className='book__infos--title'>Book Name</h3>
         <p className='book__infos--author'>Author</p>
         <Rate />
         <p className='book__infos--description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque euismod, nisi vel consectetur interdum.
         </p>
         <Button
            className='btn btn__blue btn--color--white'
            title='Read Book'
         />
      </div>
   );
}

export default BookInfos;
