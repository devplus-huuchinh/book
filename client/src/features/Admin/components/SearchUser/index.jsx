import { Input, Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';
import './SearchUser.scss';

SearchUser.propTypes = {
   handleChangeSearch: PropTypes.func,
   search: PropTypes.object,
};

SearchUser.defaultProps = {
   handleChangeSearch: null,
   search: {},
};

function SearchUser(props) {
   const { Option } = Select;
   const { handleChangeSearch, search } = props;

   const onChangeSearch = (key, value) => {
      handleChangeSearch(key, value);
   };

   return (
      <div className='search-user'>
         <Select
            className='search-user--type'
            optionLabelProp='label'
            defaultValue={search.searchType}
            onChange={(value) => onChangeSearch('searchType', value)}
         >
            <Option value='email' label='Email'>
               Email
            </Option>
            <Option value='name' label='Name'>
               Name
            </Option>
         </Select>
         <Input
            className='search-user--input'
            placeholder='Enter search value'
            onChange={(e) => onChangeSearch('searchInput', e.target.value)}
         />
      </div>
   );
}

export default SearchUser;
