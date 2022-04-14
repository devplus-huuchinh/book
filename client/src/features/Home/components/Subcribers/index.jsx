import React from 'react';
import PropTypes from 'prop-types';
import './Subcribers.scss';

Subribers.propTypes = {};

function Subribers(props) {
   return (
      <div className='subcriber'>
         <input placeholder='Drop your email...' />
         <button>Subscribe</button>
      </div>
   );
}

export default Subribers;
