import React from 'react';
import './Subcriber.scss';

function Subcriber(props) {
   return (
      <section className='section-subcriber'>
         <div className='subcriber__wrapper'>
            <p>Join the our Company</p>
            <div className='subcriber'>
               <input placeholder='Drop your email...' />
               <button>Subscribe</button>
            </div>
         </div>
      </section>
   );
}

export default Subcriber;
