import React from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

const Mapmessage = () => {
  return <S.MessageBox>숙소의 정확한 위치는 어디인가요?</S.MessageBox>;
};

export default Mapmessage;

const S = {
  MessageBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 100%;
  `,
};
