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
   const userInfo = useSelector(authData);

   const [userCommentInput, setUserCommentInput] = useState('');

   useEffect(() => {
      const getBookById = async () => {
         try {
            const responseBookDetail = await bookApi.getBook(bookId);
            const responseBookRate = await rateApi.getRateByBookId(bookId);
            const responseBookComment = await commentApi.getCommentInBook({
               bookId,
            });

            setBookDetail({
               ...responseBookDetail,
               ...responseBookRate,
            });

            setBookComment(responseBookComment);
         } catch (error) {
            console.log(error);
         }
      };
      getBookById();
   }, [bookId]);

   const handleChangeUserCommentInput = (e) => {
      setUserCommentInput(e.target.value);
   };

   const handleSubmitUserComment = async () => {
      try {
         const response = await commentApi.createCommentInBook({
            bookId,
            content: userCommentInput,
         });
         console.log('🚀 ~ response', response);
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

   return (
      <main>
         <Container>
            <BreadCrumb />
            <div className='detail__wrapper'>
               <BookImages />
               <BookInfos bookDetail={bookDetail} />
            </div>
            <BookComments
               bookDetail={bookDetail}
               bookComment={bookComment}
               userInfo={userInfo}
               userCommentInput={userCommentInput}
               handleChangeUserCommentInput={handleChangeUserCommentInput}
               handleSubmitUserComment={handleSubmitUserComment}
            />
            <MoreBooks />
         </Container>
      </main>
   );
}

export default BookDetailPage;
