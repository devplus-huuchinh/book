import React from 'react';
import PropTypes from 'prop-types';
import './TakeEverything.scss';
import Container from '../../../../../layouts/Container';
import Button from '../../../../../components/Button';

TakeEverything.propTypes = {};

function TakeEverything(props) {
   return (
      <section className='section__take'>
         <Container>
            <div className='section__take--top'>
               <img
                  src='https://images.unsplash.com/photo-1608099269227-82de5da1e4a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'
                  alt='Take Everything'
               />
               <div className='section__take--top--inner'>
                  <p className='section__take--top--inner--title'>
                     Take Everything
                  </p>
                  <h2>Complete holiday guide </h2>
                  <p className='section__take--top--inner--desc'>
                     Beautiful editions for all.
                  </p>
                  <Button
                     className='btn btn__blue btn--color--white'
                     title='Get Stated'
                  />
               </div>
            </div>
            <div className='section__take--bottom'>
               <div className='take__item'>
                  <div className='take__item--index'>
                     <h3>1</h3>
                  </div>
                  <div className='take__item--content'>
                     <h3 className='take__item--content--title'>
                        Free worldwide delivery
                     </h3>
                     <p className='take_-item--content--description'>
                        Free worldwide delivery on all orders over $100
                     </p>
                  </div>
               </div>
               <div className='take__item'>
                  <div className='take__item--index'>
                     <h3>1</h3>
                  </div>
                  <div className='take__item--content'>
                     <h3 className='take__item--content--title'>
                        Free worldwide delivery
                     </h3>
                     <p className='take_-item--content--description'>
                        Free worldwide delivery on all orders over $100
                     </p>
                  </div>
               </div>
               <div className='take__item'>
                  <div className='take__item--index'>
                     <h3>1</h3>
                  </div>
                  <div className='take__item--content'>
                     <h3 className='take__item--content--title'>
                        Free worldwide delivery
                     </h3>
                     <p className='take_-item--content--description'>
                        Free worldwide delivery on all orders over $100
                     </p>
                  </div>
               </div>
               <div className='take__item'>
                  <div className='take__item--index'>
                     <h3>1</h3>
                  </div>
                  <div className='take__item--content'>
                     <h3 className='take__item--content--title'>
                        Free worldwide delivery
                     </h3>
                     <p className='take_-item--content--description'>
                        Free worldwide delivery on all orders over $100
                     </p>
                  </div>
               </div>
            </div>
         </Container>
      </section>
   );
}

export default TakeEverything;
