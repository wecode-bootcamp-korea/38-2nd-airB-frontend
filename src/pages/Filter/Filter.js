import React, { useEffect, useState } from 'react';
import { BiBuildings } from 'react-icons/bi';
import { BsXLg, BsHouse } from 'react-icons/bs';
import { FaHotel } from 'react-icons/fa';
import Modal from 'react-modal';
import { useSearchParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components/macro';
import variables from '../../styles/variables';
import FilterModal from './FilterModal';
import ThemeFilter from './ThemeFilter';

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
    <S.ThemeCenter>
      <S.ThemeFilterOutline>
        <ThemeFilter reverseProps={reverseProps} onClick={saveValue} />
        <S.LocalFilterWrapper>
          <FilterModal isOpen={toggleModal} valueFilterMain={valueFilterMain} />
        </S.LocalFilterWrapper>
      </S.ThemeFilterOutline>
    </S.ThemeCenter>
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
    padding: 10px 0;
    height: 90px;
    width: 100%;
  `,

  LocalFilterWrapper: styled.div`
    display: flex;
    justify-content: center;
  `,
};

const HOUSETYPE = [
  { id: 1, name: '아파트', icon: BiBuildings },
  { id: 2, name: '게스트용 별채', icon: BsHouse },
  { id: 3, name: '호텔', icon: FaHotel },
];
