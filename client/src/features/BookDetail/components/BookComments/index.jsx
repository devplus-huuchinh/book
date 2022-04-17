import {
   Avatar,
   Button,
   Comment,
   Form,
   Input,
   Skeleton,
   Table,
   Tooltip,
} from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import Title from '../../../../components/Title';
import './BookComments.scss';

BookComments.propTypes = {
   bookDetail: PropTypes.object,
   bookComment: PropTypes.array,
   userInfo: PropTypes.object,
   userCommentInput: PropTypes.string,
   handleChangeUserCommentInput: PropTypes.func,
   handleSubmitUserComment: PropTypes.func,
};

BookComments.defaultProps = {
   bookDetail: {},
   bookComment: [],
   userInfo: {},
   userCommentInput: '',
   handleChangeUserCommentInput: null,
   handleSubmitUserComment: null,
};

const { TextArea } = Input;

function BookComments(props) {
   const {
      bookDetail,
      userInfo,
      bookComment,
      userCommentInput,
      handleChangeUserCommentInput,
      handleSubmitUserComment,
   } = props;

   const isCommentSkeletonLoading =
      Object.keys(bookDetail).length > 0 && Object.keys(userInfo).length > 0
         ? false
         : true;

   const columns = [
      {
         title: 'name',
         render: (record) => {
            return (
               <Comment
                  author={<>{record.user.name}</>}
                  avatar={
                     <Avatar size={30}>{record.user.name?.split('')[0]}</Avatar>
                  }
                  content={<p>{record.content}</p>}
                  datetime={
                     <Tooltip
                        title={moment(record.created_at).format(
                           'YYYY-MM-DD HH:mm:ss'
                        )}
                     >
                        <span>{moment(record.created_at).fromNow()}</span>
                     </Tooltip>
                  }
               />
            );
         },
      },
   ];

   return (
      <div className='book__comments'>
         <Title title='Comments' />
         <Skeleton loading={isCommentSkeletonLoading}>
            <Table
               columns={columns}
               dataSource={bookComment}
               rowKey={(record) => record.id}
               pagination={{
                  pageSize: 4,
               }}
            />
            <Comment
               style={{ paddingLeft: '16px' }}
               avatar={<Avatar size={30}>{userInfo.name?.split('')[0]}</Avatar>}
               content={
                  <Editor
                     userCommentInput={userCommentInput}
                     handleChangeUserCommentInput={handleChangeUserCommentInput}
                     handleSubmitUserComment={handleSubmitUserComment}
                  />
               }
            />
         </Skeleton>
      </div>
   );
}

const Editor = (props) => {
   const {
      userCommentInput,
      handleChangeUserCommentInput,
      handleSubmitUserComment,
   } = props;
   return (
      <>
         <Form.Item>
            <TextArea
               rows='2'
               placeholder='Enter your comment...'
               onChange={handleChangeUserCommentInput}
               value={userCommentInput}
               onPressEnter={handleSubmitUserComment}
            />
         </Form.Item>
         <Form.Item>
            <Button htmlType='submit' onClick={handleSubmitUserComment}>
               Add Comment
            </Button>
         </Form.Item>
      </>
   );
};

export default BookComments;
