import { Breadcrumb } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './BreadCrumb.scss';

BrearCrumb.propTypes = {};

function BrearCrumb(props) {
   const { bookName } = props;
   const DynamicBookBreadcrumb = () => <span>{bookName}</span>;

   const routes = [
      { path: '/book/:bookId', breadcrumb: DynamicBookBreadcrumb },
   ];

   const breadcrumbs = useBreadcrumbs(routes);

   return (
      <Breadcrumb>
         {breadcrumbs.map(({ breadcrumb, match }) => {
            return (
               <Breadcrumb.Item key={breadcrumb}>
                  <Link to={match.pathname}>{breadcrumb}</Link>
               </Breadcrumb.Item>
            );
         })}
      </Breadcrumb>
   );
}

export default BrearCrumb;
