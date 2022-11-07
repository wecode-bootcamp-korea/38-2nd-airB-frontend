import React from 'react';
import Nav from '../../components/Nav/GlobalNav/Nav';
import Footer from '../../components/Footer/Footer';
import GlobalNav from '../../components/Nav/GlobalNav/GlobalNav';
import Filter from '../Filter/Filter';
import ListMain from './List/ListMain';

const Main = () => {
  return (
    <>
      <GlobalNav />
      <Filter />
      <ListMain />
      메인
      <Footer />
    </>
  );
};
export default Main;
