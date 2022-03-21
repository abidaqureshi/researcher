import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Input } from 'antd';
import { filterResearcher } from '../store/actions/researcherActions';

export const AppHeader = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { Header } = Layout;
  const { Search } = Input;

  const onSearch = (searchString) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      dispatch(filterResearcher({ searchString }));
    }, 2000);
  };

  return (
    <Header>
      <div style={{ padding: '20px' }}>
        <Search
          size="large"
          style={{ width: '30%' }}
          allowClear
          placeholder="Search"
          loading={isLoading}
          onSearch={onSearch}
          enterButton
        />
      </div>
    </Header>
  );
};
