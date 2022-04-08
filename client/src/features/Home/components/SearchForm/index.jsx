import React from 'react';
import { Select, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import './SearchForm.scss';

const { Option } = Select;

SearchForm.propTypes = {};

function SearchForm(props) {
   return (
      <div className='search'>
         <Select
            className='search__dropdown'
            defaultValue='All Category'
            style={{ width: 120 }}
         >
            <Option value='all'>All Category</Option>
            <Option value='author'>Author</Option>
            <Option value='name'>Books</Option>
         </Select>
         <div className='search__input'>
            <Input placeholder='Basic usage' />
         </div>
         <div className='search__button'>
            <SearchOutlined />
         </div>
      </div>
   );
}

export default SearchForm;
