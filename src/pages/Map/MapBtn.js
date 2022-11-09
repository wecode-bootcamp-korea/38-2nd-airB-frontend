import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import variables from '../../styles/variables';
import { MainContext } from '../Main/MainContext';
import MainMap from './MainMap';
import HostStore from './Mapcontext';

const MapBtn = () => {
  const context = useContext(MainContext);
  const { isMapShowing, setMapShowing } = context;
  const toggleModal = () => {
    setMapShowing(prev => !prev);
  };

  return (
    <HostStore>
      {isMapShowing && <MainMap display={isMapShowing} />}
      {isMapShowing ? (
        <S.ButtonBox onClick={toggleModal}>리스트 보기</S.ButtonBox>
      ) : (
        <S.ButtonBox onClick={toggleModal}>
          지도 표시하기
          <S.BtnImage src="https://user-images.githubusercontent.com/110619143/200169660-1ccf318b-7264-49ce-9ae0-0c40cd82f2e3.png" />
        </S.ButtonBox>
      )}
    </HostStore>
  );
};

export default MapBtn;

const S = {
  ButtonBox: styled.div`
    position: fixed;
    ${variables.flex()}
    width: 160px;
    height: 50px;
    top: 85%;
    left: 50%;
    background-color: #212121;
    color: white;
    border-radius: 20px;
    transform: translateX(-50%);
    z-index: 10;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      transform: translateX(-50%) scale(1.1);
    }
  `,

  BtnImage: styled.img`
    width: 25px;
    height: 25px;
    margin-left: 5px;
  `,
};
