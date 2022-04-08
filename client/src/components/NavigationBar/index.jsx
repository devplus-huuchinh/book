import React from 'react';
import {} from 'antd';
import './NavigationBar.scss';
import Container from '../../layouts/Container';
import SearchForm from '../../features/Home/components/SearchForm';
import Button from '../../components/Button';
import Logo from '../Logo';
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
            <div className='navigation__bootom'></div>
         </Container>
      </div>
   );
}

export default NavigationBar;
