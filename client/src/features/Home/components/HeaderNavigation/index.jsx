import React from 'react';
import './HeaderNavigation.scss';
import PropTypes from 'prop-types';

HeaderNavigation.propTypes = {};

function HeaderNavigation(props) {
   return (
      <div className='header__navigation'>
         <ul>
            <li>
               <a href='#'>Products</a>
            </li>
            <li>
               <a href='#'>Sale</a>
            </li>
            <li>
               <a href='#'>Brands</a>
            </li>
            <li>
               <a href='#'>Stories</a>
            </li>
            <li>
               <a href='#'>Delivery</a>
            </li>
         </ul>
      </div>
   );
}

export default HeaderNavigation;
