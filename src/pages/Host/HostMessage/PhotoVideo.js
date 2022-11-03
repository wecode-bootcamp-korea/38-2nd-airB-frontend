import React from 'react';
import styled from 'styled-components/macro';

const PhotoVideo = () => {
  return (
    <S.HostPhotoVideoBox autoPlay muted loop>
      <S.HostPhotoVideoStart
        src="https://user-images.githubusercontent.com/110619143/199457753-c100958d-ce2f-407e-9cf4-4d04451db054.mp4"
        type="video/webm"
      />
    </S.HostPhotoVideoBox>
  );
};
export default PhotoVideo;

const S = {
  HostPhotoVideoBox: styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  `,

  HostPhotoVideoStart: styled.source``,
};
