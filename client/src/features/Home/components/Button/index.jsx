import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

Button.propTypes = {};

function Button(props) {
   return <button className={props.className}>{props.title}</button>;
}

export default Button;
