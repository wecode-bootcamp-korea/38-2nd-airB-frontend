import React from 'react';
import GlobalNav from '../../components/Nav/GlobalNav/GlobalNav';
import Filter from '../Filter/Filter';
import ListMain from './List/ListMain';

const Main = () => {
  return (
    <>
      <GlobalNav />
      <Filter />
      <ListMain />
    </>
  );
};
export default Main;
