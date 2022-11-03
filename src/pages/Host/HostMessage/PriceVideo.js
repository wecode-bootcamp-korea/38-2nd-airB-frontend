import React from 'react';
import styled from 'styled-components/macro';

const PriceVideo = () => {
  return (
    <S.HostPriceVideoBox autoPlay muted loop>
      <S.HostPriceVideoStart
        src="https://user-images.githubusercontent.com/110619143/199483561-bc1a8945-5e47-4ed3-86fe-cdae2123dd37.mp4"
        type="video/webm"
      />
    </S.HostPriceVideoBox>
  );
};
export default PriceVideo;

const S = {
  HostPriceVideoBox: styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  `,

  HostPriceVideoStart: styled.source``,
};
