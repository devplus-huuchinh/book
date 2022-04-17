import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../../../../layouts/Container';
import './HeroSlider.scss';
import 'swiper/css';

function HeroSlider(props) {
   return (
      <section>
         <Container>
            <Swiper spaceBetween={50} slidesPerView={1}>
               <SwiperSlide>
                  <img
                     className='slider__image'
                     src='https://images.unsplash.com/photo-1517770413964-df8ca61194a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                     alt=''
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className='slider__image'
                     src='https://images.unsplash.com/photo-1468779036391-52341f60b55d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1668&q=80'
                     alt=''
                  />
               </SwiperSlide>
               <SwiperSlide>
                  <img
                     className='slider__image'
                     src='https://images.unsplash.com/photo-1637681068516-2b22116e68cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                     alt=''
                  />
               </SwiperSlide>
            </Swiper>
         </Container>
      </section>
   );
}

export default HeroSlider;
