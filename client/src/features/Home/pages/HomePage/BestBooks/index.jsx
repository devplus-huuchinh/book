import React, { useEffect, useState } from 'react';
import bookApi from '../../../../../api/bookApi';
// import PropTypes from 'prop-types';
import Book from '../../../../../components/Book';
import Title from '../../../../../components/Title';
import Container from '../../../../../layouts/Container';
import './BestBooks.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BestBooks(props) {
   const [newBooks, setNewBooks] = useState();

   useEffect(() => {
      const getNewBooks = async () => {
         try {
            const response = await bookApi.getNewBook();
            setNewBooks(response);
         } catch (error) {
            console.log(error);
         }
      };
      getNewBooks();
   }, []);

   const settings = {
      dots: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: true,
      infinite: true,
      arrows: false,
      loop: true,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
               dots: true,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
            },
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   return (
      <section className='section__bestbooks'>
         <Container>
            <Title title='New books' />
            <div className='section__bestbooks--list'>
               <Slider {...settings}>
                  {newBooks?.map((book) => (
                     <Book
                        key={book.id}
                        image='https://source.unsplash.com/random'
                        title={book.name}
                        author={book.author}
                        bookId={book.id}
                     />
                  ))}
               </Slider>
            </div>
         </Container>
      </section>
   );
}

export default BestBooks;
