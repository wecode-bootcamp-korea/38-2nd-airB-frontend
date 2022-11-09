import React, { useState } from 'react';
import styled from 'styled-components/macro';
import variables from '../../styles/variables';
import MainMap from './MainMap';
import HostStore from './Mapcontext';

const MapBtn = () => {
  const [isMapShowing, setMapShowing] = useState(false);

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
    top: 80%;
    left: 45%;
    background-color: #212121;
    color: white;
    border-radius: 20px;
    z-index: 999;

    &:hover {
      transform: scale(1.1);
      transition: 0.5s;
    }
  `,

  BtnImage: styled.img`
    width: 25px;
    height: 25px;
    margin-left: 5px;
  `,
};
