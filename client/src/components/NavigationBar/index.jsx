import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { authData } from '../../features/Auth/authSlice';
import SearchForm from '../../features/Home/components/SearchForm';
import Container from '../../layouts/Container';
import Logo from '../Logo';
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
         </Container>
      </div>
   );
}

export default NavigationBar;
