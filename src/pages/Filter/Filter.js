import React, { useState } from 'react';
import Modal from 'react-modal';
import ThemeFilter from './ThemeFilter';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import FilterModal from './FilterModal';

const Filter = () => {
  const [modal, setModal] = useState(false);
  const [valueFilterMain, setValueFilterMain] = useState('');
  const [valueTheme, setValueTheme] = useState('');

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
      <ThemeFilter reverseProps={reverseProps} onClick={saveValue} />
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
