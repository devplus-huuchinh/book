import {
   ShoppingCartOutlined,
   TagOutlined,
   UserOutlined,
} from '@ant-design/icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { authData } from '../../features/Auth/authSlice';
import SearchForm from '../../features/Home/components/SearchForm';
import Container from '../../layouts/Container';
import Logo from '../Logo';
import HeaderNavigation from './HeaderNavigation';
import './NavigationBar.scss';
import UserInner from './User';

function NavigationBar(props) {
   const userData = useSelector(authData);
   const navigate = useNavigate();
   const isLogin = Object.keys(userData).length === 0 ? false : true;

   const onClickLogin = () => {
      navigate('/user/login');
   };

   const onClickRegister = () => {
      navigate('/user/register');
   };

   return (
      <div className='navigation'>
         <Container>
            <div className='navigation__top'>
               <Link to='/'>
                  <Logo />
               </Link>
               <SearchForm />
               <div className='navigation__top--inner'>
                  {!isLogin ? (
                     <>
                        <Button
                           className='btn btn__dot btn__white'
                           title='Register'
                           onClick={onClickRegister}
                        />
                        <Button
                           className='btn btn__purple btn__login'
                           title='Login/Sign'
                           onClick={onClickLogin}
                        />
                     </>
                  ) : (
                     <UserInner />
                  )}
               </div>
            </div>
            <div className='navigation__bottom'>
               <div className='navigation__bottom--collection'>
                  <ul>
                     <li>
                        <a href='#'>New in</a>
                     </li>
                     <li>
                        <a href='#'>Collection</a>
                     </li>
                  </ul>
               </div>
               <HeaderNavigation />
               <div className='navigation__bottom--basket'>
                  <ul>
                     <li>
                        <a href='#'>
                           <UserOutlined />
                        </a>
                     </li>
                     <li>
                        <a href='#'>
                           <TagOutlined />
                        </a>
                     </li>
                     <li>
                        <a href='#'>
                           <ShoppingCartOutlined />
                        </a>
                     </li>
                  </ul>
                  <p>Shopping basket</p>
               </div>
            </div>
         </Container>
      </div>
   );
}

export default NavigationBar;
