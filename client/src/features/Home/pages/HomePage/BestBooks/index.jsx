import React from 'react';
import Book from '../../../../../components/Book';
import Title from '../../../../../components/Title';
import Container from '../../../../../layouts/Container';
import './BestBooks.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BestBooks(props) {
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
            <Title title='The best books' />
            <div className='section__bestbooks--list'>
               <Slider {...settings}>
                  <Book
                     image='https://source.unsplash.com/random'
                     title='Book Name Book Name Book NameBook Name Book Name Book NameBook Name Book Name Book NameBook Name Book Name Book NameBook Name Book Name Book NameBook Name Book Name Book Name '
                     author='alex'
                  />
                  <Book
                     image='https://images.unsplash.com/photo-1509266272358-7701da638078?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80'
                     title='Book Name'
                     author='alex'
                  />
                  <Book
                     image='https://source.unsplash.com/random'
                     title='Book Name'
                     author='alex'
                  />
                  <Book
                     image='https://source.unsplash.com/random'
                     title='Book Name'
                     author='alex'
                  />
                  <Book
                     image='https://source.unsplash.com/random'
                     title='Book Name'
                     author='alex'
                  />
               </Slider>
            </div>
         </Container>
      </section>
   );
}

export default BestBooks;
