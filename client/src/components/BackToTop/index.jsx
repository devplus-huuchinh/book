import React from 'react';
import './BackToTop.scss';
import { ArrowUpOutlined } from '@ant-design/icons';

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
