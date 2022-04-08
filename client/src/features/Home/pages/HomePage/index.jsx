import React from 'react';
import Container from '../../../../layouts/Container';
import Subcriber from '../../components/Subcribers';
import './HomePage.scss';

function HomePage(props) {
   return (
      <div>
         <p>Hello, I'm from HomePage</p>
         <section></section>
         <section className='section-subcriber'>
            <p>Join the our Company</p>
            <Subcriber />
         </section>
      </div>
   );
}

export default HomePage;
