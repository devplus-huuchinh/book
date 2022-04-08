import React from 'react';
import PropTypes from 'prop-types';
import './BackToTop.scss';
import { ArrowUpOutlined } from '@ant-design/icons';

BackToTop.propTypes = {};

function BackToTop(props) {
   return (
      <div className='scrollTop'>
         <p>Scroll to top</p>
         <span>
            <ArrowUpOutlined />
         </span>
      </div>
   );
}

export default BackToTop;
