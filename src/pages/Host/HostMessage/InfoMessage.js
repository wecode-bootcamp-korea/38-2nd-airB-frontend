import React from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

const InfoMessage = () => {
  return <S.MessageBox>숙소 정보를 입력해주세요.</S.MessageBox>;
};

export default InfoMessage;

const S = {
  MessageBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 100%;
  `,
};
