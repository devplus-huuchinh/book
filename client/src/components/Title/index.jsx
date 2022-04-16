import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

Title.propTypes = {};

function Title(props) {
   const title = props.title;
   return (
      <div className='section__title'>
         <h2>{title}</h2>
      </div>
   );
}

export default Title;
