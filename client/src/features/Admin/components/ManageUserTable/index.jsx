import { Select, Table } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
// import SearchUser from '../SearchUser';
import './ManageUserTable.scss';

ManageUserTable.propTypes = {
   users: PropTypes.array,
   handleOnClickBlockUser: PropTypes.func,
};

ManageUserTable.defaultProps = {
   users: [],
   handleOnClickBlockUser: null,
};

function ManageUserTable(props) {
   const { Option } = Select;

   const { users, handleOnClickBlockUser } = props;

   const onChangeBlockUserOptions = (blockData) => {
      handleOnClickBlockUser(blockData);
   };

   const columns = [
      {
         title: 'Id',
         dataIndex: 'id',
      },
      {
         title: 'Email',
         dataIndex: 'email',
      },
      {
         title: 'Name',
         dataIndex: 'name',
      },
      {
         title: 'Block',
         render: (record) => {
            return (
               <Select
                  defaultValue={record.isBlocked}
                  optionLabelProp='label'
                  onChange={(value) =>
                     onChangeBlockUserOptions({
                        id: record.id,
                        isBlocked: value,
                     })
                  }
               >
                  <Option value={0} label='No'>
                     No
                  </Option>
                  <Option value={1} label='Yes'>
                     Yes
                  </Option>
               </Select>
            );
         },
      },
      {
         title: 'Role',
         dataIndex: ['role', 'name'],
      },
   ];

   return (
      <>
         <Table
            columns={columns}
            dataSource={users}
            rowKey={(record) => record.id}
            pagination={false}
            className='admin-page--table'
            bordered={true}
         />
      </>
   );
}

export default ManageUserTable;
