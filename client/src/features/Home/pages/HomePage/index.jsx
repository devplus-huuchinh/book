import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to='/admin'>admin</Link>
         </section>
      </div>
   );
}

export default HomePage;
