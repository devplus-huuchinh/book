import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../../../layouts/Container';
import BookInfos from '../../components/BookInfos';
import BookComments from '../../components/BookComments';
import BookImages from '../../components/BookImages';
import BreadCrumb from '../../components/BreadCrumb';
import MoreBooks from '../../components/MoreBooks';
import './BookDetailPage.scss';
import bookApi from '../../../../api/bookApi';
import rateApi from '../../../../api/rateApi';

function BookDetailPage(props) {
   const { bookId } = useParams();
   const [bookDetail, setBookDetail] = useState({});

   useEffect(() => {
      const getBookById = async () => {
         try {
            const responseBookDetail = await bookApi.getBook(bookId);
            const responseBookRate = await rateApi.getRateByBookId(bookId);
            setBookDetail({
               ...responseBookDetail,
               ...responseBookRate,
            });
         } catch (error) {
            console.log(error);
         }
      };
      getBookById();
   }, [bookId]);

   return (
      <main>
         <Container>
            <BreadCrumb />
            <div className='detail__wrapper'>
               <BookImages />
               <BookInfos bookDetail={bookDetail} />
            </div>
            <BookComments />
            <MoreBooks />
         </Container>
      </main>
   );
}

export default BookDetailPage;
