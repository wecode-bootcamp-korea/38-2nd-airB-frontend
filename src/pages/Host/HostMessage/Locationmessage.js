import React from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

const Locationmessage = () => {
  return (
    <S.MessageBox>게스트가 머무르게 될 숙소의 종류가 무엇인가요?</S.MessageBox>
  );
};

export default Locationmessage;

const S = {
  MessageBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 100%;
  `,
};
