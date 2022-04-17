import { Modal, Rate, Skeleton } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/Button';
import './BookInfos.scss';

BookInfos.propTypes = {
   bookDetail: PropTypes.object.isRequired,
};

function BookInfos(props) {
   const { bookDetail } = props;

   const [isReadingBookVisible, setIsReadingBookVisible] = useState(false);

   const handleCancel = () => {
      setIsReadingBookVisible(false);
   };

   const handleShowModal = () => {
      setIsReadingBookVisible(true);
   };

   return (
      <>
         <div className='book__infos'>
            <Skeleton loading='false'>
               <h3 className='book__infos--title'>{bookDetail?.name}</h3>
               <p className='book__infos--author'>{bookDetail?.author}</p>
               <Rate value={bookDetail?.star} disabled />
               <p className='book__infos--description'>
                  Voluptate labore ea dolor non aliqua ut qui nisi nisi ullamco
                  ipsum. Sit fugiat minim officia duis cupidatat labore irure
                  labore officia fugiat eiusmod dolor mollit. Deserunt eiusmod
                  consectetur tempor pariatur officia.
               </p>
               <Button
                  className='btn btn__blue btn--color--white'
                  title='Read Book'
                  onClick={handleShowModal}
               />
            </Skeleton>
         </div>
         <div>
            <Modal
               title={bookDetail?.name}
               visible={isReadingBookVisible}
               onCancel={handleCancel}
               footer={false}
            >
               <p>{bookDetail?.content}</p>
            </Modal>
         </div>
      </>
   );
}

export default BookInfos;
