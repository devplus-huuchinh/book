import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../features/Home/components/NavigationBar';
import FooterBar from '../../features/Home/components/FooterBar';

Main.propTypes = {};

function Main(props) {
   return (
      <div>
         <NavigationBar />
         <Outlet />
         <FooterBar />
      </div>
   );
}

export default Main;
