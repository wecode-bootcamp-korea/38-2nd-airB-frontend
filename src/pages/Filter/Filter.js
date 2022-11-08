import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { ListContext } from '../Main/ListText';
import FilterModal from './FilterModal';
import ThemeFilter from './ThemeFilter';

const Filter = () => {
  const [modal, setModal] = useState(false);
  const [valueFilterMain, setValueFilterMain] = useState('');
  const [valueTheme, setValueTheme] = useState('');
  const context = useContext(ListContext);
  const { setFilterValue, setFilterTheme, filterTheme, url } = context;

  const reverseProps = num => {
    setValueFilterMain(num);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  const saveValue = num => {
    setValueTheme(num);
  };

  return (
    <S.ThemeFilterOutline>
      <ThemeFilter onClick={saveValue} />
      <S.LocalFilterWrapper>
        <FilterModal isOpen={toggleModal} valueFilterMain={valueFilterMain} />
      </S.LocalFilterWrapper>
    </S.ThemeFilterOutline>
  );
};

export default Filter;

Modal.setAppElement('#root');

const S = {
  ThemeFilterOutline: styled.div`
    display: flex;
    justify-content: center;
    padding: 0 80px;
  `,

  LocalFilterWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
};
