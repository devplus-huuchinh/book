import React from 'react';
import './BookComments.scss';
// import PropTypes from 'prop-types';

// BookComments.propTypes = {};
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import Container from '../../../../../layouts/Container';
import Title from '../../../../../components/Title';
const data = [
   {
      actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
         <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
         </p>
      ),
      datetime: (
         <Tooltip
            title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}
         >
            <span>{moment().subtract(1, 'days').fromNow()}</span>
         </Tooltip>
      ),
   },
   {
      actions: [<span key='comment-list-reply-to-0'>Reply to</span>],
      author: 'Han Solo',
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
         <p>
            We supply a series of design principles, practical patterns and high
            quality design resources (Sketch and Axure), to help people create
            their product prototypes beautifully and efficiently.
         </p>
      ),
      datetime: (
         <Tooltip
            title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}
         >
            <span>{moment().subtract(2, 'days').fromNow()}</span>
         </Tooltip>
      ),
   },
];

function BookComments(props) {
   return (
      <div className='book__comments'>
         <Title title='Comments' />
         <List
            className='comment-list'
            header={`${data.length} replies`}
            itemLayout='horizontal'
            dataSource={data}
            renderItem={(item) => (
               <li>
                  <Comment
                     actions={item.actions}
                     author={item.author}
                     avatar={item.avatar}
                     content={item.content}
                     datetime={item.datetime}
                  />
               </li>
            )}
         />
      </div>
   );
}

export default BookComments;
