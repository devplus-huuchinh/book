import React from 'react';
import './FooterBar.scss';
import Container from '../../layouts/Container';
import {
   PlusOutlined,
   TwitterOutlined,
   FacebookOutlined,
   YoutubeOutlined,
} from '@ant-design/icons';
import Button from '../../features/Home/components/Button';
import BackToTop from '../BackToTop';

// import PropTypes from 'prop-types';

// FooterBar.propTypes = {};

function FooterBar(props) {
   return (
      <footer className='footer'>
         <Container>
            <div className='footer__top'>
               <div className='footer__top--brand'>
                  <p>EBooks.</p>
               </div>
               <div className='footer__inner'>
                  <Button
                     className='btn btn__dot m-r-20 btn__help btn__white'
                     title='Help'
                  />
                  <Button className='btn btn__faq btn__purple' title="FAQ's" />
               </div>
            </div>
            <div className='footer__category'>
               <div className='category__location'>
                  <p>Hai Chau, Da Nang, Viet Nam, Asia.</p>
                  <div className='category__more'>
                     <Button
                        className='btn btn__white btn__more'
                        title='More +'
                     />
                  </div>
                  <div className='category--social'>
                     <a href='#'>
                        <FacebookOutlined />
                     </a>
                     <a href='#'>
                        <TwitterOutlined />
                     </a>
                     <a href='#'>
                        <YoutubeOutlined />
                     </a>
                  </div>
               </div>
               <div className='category__list'>
                  <div className='category__list--col'>
                     <ul>
                        <li>
                           <a href='#'>New in</a>
                        </li>
                        <li>
                           <a href='#'>Collections</a>
                        </li>
                        <li>
                           <a href='#'>Author</a>
                        </li>
                        <li>
                           <a href='#'>Community</a>
                        </li>
                     </ul>
                  </div>
                  <div className='category__list--col'>
                     <ul>
                        <li>
                           <a href='#'>Products</a>
                        </li>
                        <li>
                           <a href='#'>Gift Vouchers</a>
                        </li>
                        <li>
                           <a href='#'>Brand</a>
                        </li>
                        <li>
                           <a href='#'>Stories</a>
                        </li>
                     </ul>
                  </div>
                  <div className='category__list--col'>
                     <ul>
                        <li>
                           <a href='#'>Track Orders</a>
                        </li>
                        <li>
                           <a href='#'>Delivery & Returns</a>
                        </li>
                        <li>
                           <a href='#'>Sale</a>
                        </li>
                        <li>
                           <a href='#'>Contact</a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className='footer__bottom'>
               <div className='footer__bottom--coppyright'>
                  © 2022 - TySon - Devplus
               </div>
               <div className='footer__bottom--policy'>
                  <ul>
                     <li>
                        <a href='#'>Privacy policy</a>
                     </li>
                     <li>
                        <a href='#'>Terms of use</a>
                     </li>
                     <li>
                        <a href='#'>Cookies</a>
                     </li>
                  </ul>
               </div>
               {/* <BackToTop /> */}
            </div>
         </Container>
      </footer>
   );
}

export default FooterBar;
