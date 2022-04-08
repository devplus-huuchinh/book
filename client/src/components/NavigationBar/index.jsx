import React from 'react';
import {} from 'antd';
import './NavigationBar.scss';
import Container from '../../layouts/Container';
import SearchForm from '../../features/Home/components/SearchForm';
import Button from '../../components/Button';
import Logo from '../Logo';
import HeaderNavigation from '../../features/Home/components/HeaderNavigation';
import {
   UserOutlined,
   TagOutlined,
   ShoppingCartOutlined,
} from '@ant-design/icons';

// import PropTypes from 'prop-types';

// NavigationBar.propTypes = {};

function NavigationBar(props) {
   return (
      <div className='navigation'>
         <Container>
            <div className='navigation__top'>
               <Logo />
               <SearchForm />
               <div className='navigation__top--inner'>
                  <Button className='btn btn__dot btn__white' title='Help' />
                  <Button
                     className='btn btn__purple btn__login'
                     title='Login/Sign'
                  />
               </div>
            </div>
            <div className='navigation__bottom'>
               <div className='navigation__bottom--collection'>
                  <ul>
                     <li>
                        <a href='#'>New in</a>
                     </li>
                     <li>
                        <a href='#'>Collection</a>
                     </li>
                  </ul>
               </div>
               <HeaderNavigation />
               <div className='navigation__bottom--basket'>
                  <ul>
                     <li>
                        <a href='#'>
                           <UserOutlined />
                        </a>
                     </li>
                     <li>
                        <a href='#'>
                           <TagOutlined />
                        </a>
                     </li>
                     <li>
                        <a href='#'>
                           <ShoppingCartOutlined />
                        </a>
                     </li>
                  </ul>
                  <p>Shopping basket</p>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default NavigationBar;
