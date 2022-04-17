import React from 'react';
import './BookImages.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BookImages(props) {
   const settings = {
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: true,
      draggable: true,
      infinite: true,
      arrows: false,
      verticalSwiping: true,
      loop: true,
      responsive: [
         {
            breakpoint: 580,
            settings: {
               dots: false,
               slidesToShow: 2,
               slidesToScroll: 1,
               infinite: true,
            },
         },
      ],
   };
   return (
      <React.Fragment>
         <div className='book__image'>
            <div className='book__image--large'>
               <img
                  src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/276996913_1776929639179553_3094862188966658416_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4HC6TWOAD3MAX9Dv2rt&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-Vh8f-OcwTur9wgqRSGmikfefv223b953MXkTvmQDYMQ&oe=625F0142'
                  alt='Book cover'
               />
            </div>
            <div className='book__image--lib'>
               <Slider {...settings}>
                  <div>
                     <img
                        src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/276996913_1776929639179553_3094862188966658416_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4HC6TWOAD3MAX9Dv2rt&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-Vh8f-OcwTur9wgqRSGmikfefv223b953MXkTvmQDYMQ&oe=625F0142'
                        alt=''
                     />
                  </div>
                  <div>
                     <img
                        src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/276996913_1776929639179553_3094862188966658416_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4HC6TWOAD3MAX9Dv2rt&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-Vh8f-OcwTur9wgqRSGmikfefv223b953MXkTvmQDYMQ&oe=625F0142'
                        alt=''
                     />
                  </div>
                  <div>
                     <img
                        src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/276996913_1776929639179553_3094862188966658416_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4HC6TWOAD3MAX9Dv2rt&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-Vh8f-OcwTur9wgqRSGmikfefv223b953MXkTvmQDYMQ&oe=625F0142'
                        alt=''
                     />
                  </div>
                  <div>
                     <img
                        src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/276996913_1776929639179553_3094862188966658416_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4HC6TWOAD3MAX9Dv2rt&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-Vh8f-OcwTur9wgqRSGmikfefv223b953MXkTvmQDYMQ&oe=625F0142'
                        alt=''
                     />
                  </div>
                  <div>
                     <img
                        src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/276996913_1776929639179553_3094862188966658416_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=4HC6TWOAD3MAX9Dv2rt&_nc_ht=scontent.fdad3-5.fna&oh=00_AT-Vh8f-OcwTur9wgqRSGmikfefv223b953MXkTvmQDYMQ&oe=625F0142'
                        alt=''
                     />
                  </div>
               </Slider>
            </div>
         </div>
      </React.Fragment>
   );
}

export default BookImages;
