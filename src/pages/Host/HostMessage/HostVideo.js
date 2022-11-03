import React from 'react';
import styled from 'styled-components/macro';

const HostVideo = () => {
  return (
    <S.HostVideoBox autoPlay muted loop>
      <S.HostVideoStart
        src="https://user-images.githubusercontent.com/110619143/199485007-824ff3d8-f66d-4466-a317-b872a9daa185.mp4"
        type="video/webm"
      />
    </S.HostVideoBox>
  );
};
export default HostVideo;

const S = {
  HostVideoBox: styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  `,

  HostVideoStart: styled.source``,
};
