import React, { useContext, useRef } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';
import HostStore, { HostContext } from '../User';

const HostMap = () => {
  const mapRef = useRef();
  const context = useContext(HostContext);
  const { lng, setLng, lat, setLat } = context;

  return (
    <HostStore>
      <S.HostMapBox>
        <Map // 지도를 표시할 Container
          center={{ lat: 37.5063, lng: 127.0536 }}
          style={{
            // 지도의 크기
            width: '99.8%',
            height: '100%',
          }}
          level={3} // 지도의 확대 레벨
          ref={mapRef}
        >
          <S.LocationButton
            onClick={() => {
              const map = mapRef.current;
              setLng(map.getCenter().getLng());
              setLat(map.getCenter().getLat());
            }}
          >
            이 주소가 정확하나요?
            <S.Dot>⌖</S.Dot>
          </S.LocationButton>
          <MapMarker position={{ lat, lng }} />
        </Map>
      </S.HostMapBox>
    </HostStore>
  );
};
export default HostMap;

const S = {
  HostMapBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    height: 78%;
    animation-name: fadeOut;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  HostMap: styled.div``,

  LocationButton: styled.button`
    position: fixed;
    width: 300px;
    height: 50px;
    color: white;
    background-color: #212121;
    font-size: 20px;
    border-radius: 20px;
    border: none;
    transform: translate(0, 150px);
    margin: 20px;
    z-index: 999;
    cursor: pointer;
  `,

  TextBox: styled.div`
    width: 100px;
    height: 10px;
  `,

  ResultNone: styled.div`
    display: none;
  `,

  Dot: styled.div`
    position: fixed;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    color: blue;
    transform: translate(135px, -180px);
  `,
};
