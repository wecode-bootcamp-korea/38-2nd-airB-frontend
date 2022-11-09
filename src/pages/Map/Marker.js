import React, { useState } from 'react';
import { MapMarker, useMap } from 'react-kakao-maps-sdk';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Marker = ({ position, image, id }) => {
  const map = useMap();
  const [isVisible, setIsVisible] = useState(false);
  const location = useNavigate();

  return (
    <MapMarker
      position={position}
      image={{
        src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
        size: {
          width: 25,
          height: 35,
        },
      }}
      onClick={marker => {
        map.panTo(marker.getPosition());
        location(`/detail/${id}`);
      }}
      onMouseOver={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
    >
      {isVisible && <S.Image src={image[0]} />}
    </MapMarker>
  );
};

export default Marker;

const S = {
  Image: styled.img`
    width: 200px;
    height: 160px;
    object-fit: cover;
  `,
};
