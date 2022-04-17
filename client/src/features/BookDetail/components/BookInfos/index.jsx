import { Modal, Rate, Skeleton } from 'antd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/Button';
import './BookInfos.scss';

BookInfos.propTypes = {
   bookDetail: PropTypes.object.isRequired,
   handleChangeRating: PropTypes.func,
   handleSubmitRating: PropTypes.func,
   isUserRate: PropTypes.bool,
};

BookInfos.defaultProps = {
   handleChangeRating: null,
   handleSubmitRating: null,
   isUserRate: false,
};

function BookInfos(props) {
   const {
      bookDetail,
      handleChangeRating,
      handleSubmitRating,
      isUserRate,
      handleOnClickUnRate,
   } = props;
   const [isReadingBookVisible, setIsReadingBookVisible] = useState(false);
   const [isRatingBookVisible, setIsRatingBookVisible] = useState(false);

   const handleCancelReadingBook = () => {
      setIsReadingBookVisible(false);
   };

   const handleShowModalReadingBook = () => {
      setIsReadingBookVisible(true);
   };

   const handleCancelRatingBook = () => {
      setIsRatingBookVisible(false);
   };

   const handleOkRatingBook = () => {
      handleSubmitRating();
      handleCancelRatingBook();
   };

   const handleShowModalRatingBook = () => {
      setIsRatingBookVisible(true);
   };

   const onClickUnRate = () => {
      handleOnClickUnRate();
   };

   const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

   return (
      <>
         <div className='book__infos'>
            <Skeleton loading={false}>
               <h3 className='book__infos--title'>{bookDetail?.name}</h3>
               <p className='book__infos--author'>{bookDetail?.author}</p>
               <Rate value={bookDetail?.star} disabled />
               <p className='book__infos--description'>
                  Voluptate labore ea dolor non aliqua ut qui nisi nisi ullamco
                  ipsum. Sit fugiat minim officia duis cupidatat labore irure
                  labore officia fugiat eiusmod dolor mollit. Deserunt eiusmod
                  consectetur tempor pariatur officia.
               </p>
               <div style={{ display: 'flex', gap: '10px' }}>
                  <Button
                     className='btn btn__blue btn--color--white'
                     title='Read Book'
                     onClick={handleShowModalReadingBook}
                  />

                  {isUserRate ? (
                     <Button
                        className='btn btn__rate'
                        title='Un-Rate'
                        onClick={onClickUnRate}
                     />
                  ) : (
                     <Button
                        className='btn btn__rate'
                        title='Rate'
                        onClick={handleShowModalRatingBook}
                     />
                  )}
               </div>
            </Skeleton>
         </div>
         <div>
            <Modal
               title={bookDetail?.name}
               visible={isReadingBookVisible}
               onCancel={handleCancelReadingBook}
               footer={false}
            >
               <p>{bookDetail?.content}</p>
            </Modal>
         </div>
         <div>
            <Modal
               title='Rating book 😍'
               visible={isRatingBookVisible}
               onOk={handleOkRatingBook}
               onCancel={handleCancelRatingBook}
               width='350px'
               style={{ textAlign: 'center' }}
            >
               <Rate tooltips={desc} onChange={handleChangeRating} />
            </Modal>
         </div>
      </>
   );
}

export default BookInfos;
