import React from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

const Viewmessage = () => {
  return <S.MessageBox>멋진 뷰와 지역을 선택해주세요.</S.MessageBox>;
};

export default Viewmessage;

const S = {
  MessageBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 100%;
  `,
};
