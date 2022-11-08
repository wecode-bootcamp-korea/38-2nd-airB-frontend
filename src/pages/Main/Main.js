import React from 'react';
import GlobalNav from '../../components/Nav/GlobalNav/GlobalNav';
import ListMain from './List/ListMain';
import Filter from '../Filter/Filter';
import MapBtn from '../Map/MapBtn';

const Main = () => {
  return (
    <>
      <GlobalNav />
      <Filter />
      <ListMain />
      <MapBtn />
    </>
  );
};
export default Main;
