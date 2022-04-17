import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../../../layouts/Container';
import BreadCrumb from '../../../../features/BookDetail/pages/BookDetailPage/BreadCrumb';
import BookImages from './BookImages';
import BookInfos from './BookInfos';
import './BookDetailPage.scss';
import MoreBooks from './MoreBooks';
import BookComments from './BookComments';

function BookDetailPage(props) {
   const { bookId } = useParams();

   return (
      <main>
         <Container>
            <BreadCrumb />
            <div className='detail__wrapper'>
               <BookImages />
               <BookInfos />
            </div>
            <BookComments />
            <MoreBooks />
         </Container>
      </main>
   );
}

export default BookDetailPage;
