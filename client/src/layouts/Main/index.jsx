import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterBar from '../../components/FooterBar';
import NavigationBar from '../../components/NavigationBar';

Main.propTypes = {};

function Main(props) {
   return (
      <React.Fragment>
         <NavigationBar />
         <Outlet />
         <FooterBar />
      </React.Fragment>
   );
}

export default Main;
