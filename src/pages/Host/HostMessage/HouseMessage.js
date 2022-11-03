import React from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

const HouseMessage = () => {
  return <S.MessageBox>숙소에서 맞이할 최대 인원수를 알려주세요.</S.MessageBox>;
};

export default HouseMessage;

const S = {
  MessageBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 100%;
  `,
};
