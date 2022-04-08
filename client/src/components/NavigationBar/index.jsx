import React from 'react';
import {} from 'antd';
import './NavigationBar.scss';
import Container from '../../layouts/Container';
import Logo from '../Logo';
// import PropTypes from 'prop-types';

// NavigationBar.propTypes = {};

function NavigationBar(props) {
   return (
      <div className='navigation'>
         <Container>
            <div className='navigation__top'>
               <Logo />
            </div>
            <div className='navigation__bootom'></div>
         </Container>
      </div>
   );
}

export default NavigationBar;
