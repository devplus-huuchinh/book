import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

Button.propTypes = {};

function Button(props) {
   const { title, className } = props;
   return <button className={className}>{title}</button>;
}

export default Button;
