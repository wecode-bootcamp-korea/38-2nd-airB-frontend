import React, { useContext } from 'react';
import Nav from '../../components/Nav/Nav';
import Filter from '../Filter/Filter';
import MapBtn from '../Map/MapBtn';
import ListMain from './List/ListMain';
import { MainContext } from './MainContext';

const Main = () => {
  const context = useContext(MainContext);
  const { isMapShowing, setMapShowin } = context;

  return (
    <>
      <Filter />
      {!isMapShowing ? <ListMain /> : null}
      <MapBtn />
    </>
  );
};
export default Main;
