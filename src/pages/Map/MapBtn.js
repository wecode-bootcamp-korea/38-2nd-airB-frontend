import React, { useState } from 'react';
import MainMap from './MainMap';
import HostStore from './Mapcontext';
import variables from '../../styles/variables';
import styled from 'styled-components';

const MapBtn = () => {
  const [display, setDisplay] = useState(false);
  const modal = () => {
    if (!display) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  return (
    <HostStore>
      {display ? <MainMap display={display} /> : null}

      {display ? (
        <S.ButtonBox onClick={modal}>리스트 보기</S.ButtonBox>
      ) : (
        <S.ButtonBox onClick={modal}>
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
