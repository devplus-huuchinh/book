import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import './BreadCrumb.scss';
import { useNavigate } from 'react-router-dom';

BrearCrumb.propTypes = {};

function BrearCrumb(props) {
   const navagate = useNavigate();

   const onClickHome = () => {
      navagate(`/`);
   };
   return (
      <Breadcrumb>
         <Breadcrumb.Item onClick={onClickHome}>Home</Breadcrumb.Item>
         <Breadcrumb.Item>Book Name</Breadcrumb.Item>
      </Breadcrumb>
   );
}

export default BrearCrumb;
