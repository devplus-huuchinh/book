import React from 'react';
import './BookImages.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BookImages(props) {
   const settings = {
      dots: false,
      slidesToShow: 3,
      // slidesToScroll: 1,
      vertical: true,
      draggable: true,
      infinite: true,
      arrows: false,
      verticalSwiping: true,
      loop: true,
      responsive: [
         {
            breakpoint: 767,
            settings: {
               dots: false,
               slidesToShow: 3,
               // slidesToScroll: 1,
               infinite: true,
               vertical: false,
               verticalSwiping: false,
               loop: true,
               arrows: true,
            },
         },
      ],
   };
   return (
      <React.Fragment>
         <div className='book__image'>
            <div className='book__image--large'>
               <img
                  src='https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
                  alt='Book cover'
               />
            </div>
            <div className='book__image--lib'>
               <Slider {...settings}>
                  <div>
                     <img
                        className='book__image--small'
                        src='https://images.unsplash.com/photo-1576872381149-7847515ce5d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80'
                        alt=''
                     />
                  </div>
                  <div>
                     <img
                        className='book__image--small'
                        src='https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                        alt=''
                     />
                  </div>
                  <div>
                     <img
                        className='book__image--small'
                        src='https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                        alt=''
                     />
                  </div>
                  <div>
                     <img
                        className='book__image--small'
                        src='https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                        alt=''
                     />
                  </div>
                  <div>
                     <img
                        className='book__image--small'
                        src='https://images.unsplash.com/photo-1507587396692-5afe1f777676?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
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
