import React, { useState } from 'react';
import Modal from 'react-modal';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components/macro';
import variables from '../../styles/variables';
import FilterModal from './FilterModal';
import ThemeFilter from './ThemeFilter';

const Filter = () => {
  const [modal, setModal] = useState(false);
  const [valueFilterMain, setValueFilterMain] = useState('');
  const [_, setValueTheme] = useState('');

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
  ThemeCenter: styled.div`
    ${variables.flex()}
    width: 1400px;
    margin: 0 auto;
  `,

  ThemeFilterOutline: styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 30px;
    height: 90px;
    width: 1400px;
    margin: 0 auto;
  `,

  LocalFilterWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
};
