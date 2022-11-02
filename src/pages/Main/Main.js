import React from 'react';
import Nav from '../../components/Nav/Nav';
import Filter from '../Filter/Filter';
import MapBtn from '../Map/MapBtn';
import ListMain from './List/ListMain';

const Main = () => {
  return (
    <>
      <Nav />
      <Filter />
      <ListMain />
      <MapBtn />
    </>
  );
};
export default Main;
