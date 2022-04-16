import React from 'react';
import AllBooks from './AllBooks';
import BestBooks from './BestBooks';
import Subcriber from './Subcriber';
import TakeEverything from './TakeEverything';

import './HomePage.scss';
import HeroSlider from './HeroSlider';

function HomePage(props) {
   return (
      <React.Fragment>
         <HeroSlider />
         <BestBooks />
         <TakeEverything />
         <AllBooks />
         <Subcriber />
      </React.Fragment>
   );
}

export default HomePage;
