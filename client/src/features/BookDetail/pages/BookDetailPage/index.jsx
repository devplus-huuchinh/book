import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import bookApi from '../../../../api/bookApi';
import commentApi from '../../../../api/commentApi';
import rateApi from '../../../../api/rateApi';
import Container from '../../../../layouts/Container';
import { authData } from '../../../Auth/authSlice';
import BookComments from '../../components/BookComments';
import BookImages from '../../components/BookImages';
import BookInfos from '../../components/BookInfos';
import BreadCrumb from '../../components/BreadCrumb';
import MoreBooks from '../../components/MoreBooks';
import './BookDetailPage.scss';

function BookDetailPage(props) {
   const { bookId } = useParams();
   const [bookDetail, setBookDetail] = useState({});
   const [bookComment, setBookComment] = useState([]);
   const [moreBook, setMoreBook] = useState([]);
   const [bookRating, setBookRating] = useState(0);
   const [isUserRate, setIsUserRate] = useState(false);
   const [unRate, setUnRate] = useState(false);
   const userInfo = useSelector(authData);

   const [userCommentInput, setUserCommentInput] = useState('');

   useEffect(() => {
      const getBookById = async () => {
         try {
            const responseBookDetail = await bookApi.getBook(bookId);
            const responseBookRate = await rateApi.getRateByBookId({ bookId });
            const responseBookComment = await commentApi.getCommentInBook({
               bookId: Number(bookId),
            });
            const responseIsUserRate = await rateApi.checkUserRate({
               bookId: Number(bookId),
            });

            setBookDetail({
               ...responseBookDetail,
               ...responseBookRate,
            });

            setBookComment(responseBookComment);
            setIsUserRate(
               responseIsUserRate.message === 'user_is_rate' ? true : false
            );
         } catch (error) {
            console.log(error);
         }
      };
      getBookById();
   }, [bookId, bookRating, unRate]);

   useEffect(() => {
      const getAllBook = async () => {
         const response = await bookApi.getAllBook();
         setMoreBook(response);
      };
      getAllBook();
   }, []);

   const handleChangeUserCommentInput = (e) => {
      setUserCommentInput(e.target.value);
   };

   const handleSubmitUserComment = async () => {
      try {
         const response = await commentApi.createCommentInBook({
            bookId,
            content: userCommentInput,
         });
         updateNewComment(response);
         setUserCommentInput('');
      } catch (error) {
         console.log(error);
      }
   };

   const updateNewComment = (createResponse) => {
      setBookComment((prev) => {
         prev.unshift({
            id: createResponse.id,
            bookId: createResponse.bookId,
            content: createResponse.content,
            created_at: new Date(),
            updated_at: new Date(),
            user: userInfo,
         });

         return [...prev];
      });
   };

   const handleChangeRating = (value) => {
      setBookRating(value);
   };

   const handleSubmitRating = async () => {
      try {
         const response = await rateApi.createRateByBookId({
            star: Number(bookRating),
            bookId: bookId,
         });
         console.log('🚀 ~ response', response);
      } catch (error) {
         console.log(error);
      }
   };

   const handleOnClickUnRate = async () => {
      try {
         const response = await rateApi.cancelRateByBookId({
            bookId: bookId,
         });
         if (response.message === 'unRate_success') return setUnRate(!unRate);
         return message.error('Something went wrong');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <main>
         <Container>
            <BreadCrumb bookName={bookDetail.name} />
            <div className='detail__wrapper'>
               <BookImages />
               <BookInfos
                  bookDetail={bookDetail}
                  handleChangeRating={handleChangeRating}
                  handleSubmitRating={handleSubmitRating}
                  isUserRate={isUserRate}
                  handleOnClickUnRate={handleOnClickUnRate}
               />
            </div>
            <BookComments
               bookDetail={bookDetail}
               bookComment={bookComment}
               userInfo={userInfo}
               userCommentInput={userCommentInput}
               handleChangeUserCommentInput={handleChangeUserCommentInput}
               handleSubmitUserComment={handleSubmitUserComment}
            />
            <MoreBooks moreBook={moreBook} />
         </Container>
      </main>
   );
}

export default BookDetailPage;
