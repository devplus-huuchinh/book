import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

Button.propTypes = {
   title: PropTypes.string,
   className: PropTypes.string,
   onClick: PropTypes.func,
};

Button.defaultProps = {
   title: '',
   className: '',
   onClick: null,
};

function Button(props) {
   const { title, className, onClick } = props;
   return (
      <button className={className} onClick={onClick}>
         {title}
      </button>
   );
}

export default Button;
