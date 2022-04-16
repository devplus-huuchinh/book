import React from 'react';
// import PropTypes from 'prop-types';
import './Button.scss';

// Button.propTypes = {};

function Button(props) {
   const { title, className, onClick } = props;
   return (
      <button className={className} onClick={onClick}>
         {title}
      </button>
   );
}

export default Button;
