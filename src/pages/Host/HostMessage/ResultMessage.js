import React from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

const ResultMessage = () => {
  return <S.MessageBox>한 번 더 확인해 주세요.</S.MessageBox>;
};

export default ResultMessage;

const S = {
  MessageBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 100%;
  `,
};
