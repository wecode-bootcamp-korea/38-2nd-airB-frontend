import React from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

const HostLanding = ({ message, video }) => {
  if (message) return <S.MessageBox>{message}</S.MessageBox>;
  if (video)
    return (
      <S.HostVideoBox autoPlay muted loop>
        <S.HostVideoStart src={video} type="video/webm" />
      </S.HostVideoBox>
    );
};

export default HostLanding;

const S = {
  MessageBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 100%;
  `,
  HostVideoBox: styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  `,

  HostVideoStart: styled.source``,
};
