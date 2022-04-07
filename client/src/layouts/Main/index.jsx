import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterBar from '../../components/FooterBar';
import NavigationBar from '../../components/NavigationBar';

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
