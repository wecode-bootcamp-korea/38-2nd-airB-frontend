/*global kakao */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Map, MapMarker, useMap } from 'react-kakao-maps-sdk';
import { HostContext } from './Mapcontext';
import variables from '../../styles/variables';
import styled from 'styled-components/macro';

const MainMap = () => {
  const EventMarkerContainer = ({ position, image }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);
    const location = useNavigate();

    return (
      <>
        <MapMarker
          position={position} // 마커를 표시할 위치
          // @ts-ignore
          image={{
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
            size: {
              width: 25,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
          onClick={marker => {
            map.panTo(marker.getPosition());
            location('/');
          }}
          onMouseOver={() => setIsVisible(true)}
          onMouseOut={() => setIsVisible(false)}
        >
          {isVisible && <S.Image src={image[0]} />}
        </MapMarker>
      </>
    );
  };
  const context = useContext(HostContext);
  const { filterTheme, setFilterTheme, data, setData } = context;
  const clickFilter = props => {
    setFilterTheme(props);
  };
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(
  //     `http://10.58.52.106:8000/product/option?city=&themeId=${filterTheme}&lowprice=&highprice=&bed=&bathroom=&bedroom=&APT=&GH=&HT=&guest=&checkIn=&checkOut=`
  //   )
  //     .then(res => res.json())
  //     .then(res => {
  //       setData(res.data);
  //       setIsLoading(false);
  //     });
  // }, []);
  useEffect(() => {
    setIsLoading(true);
    fetch(`/data/markerData.json`)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 37.529465455933526,
          lng: 126.9647247907041,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '80vh',
        }}
        level={10}
      >
        {data.map(value => (
          <EventMarkerContainer
            key={value.id}
            position={{ lat: value.latitude, lng: value.longitude }}
            lat={value.latitude}
            lng={value.longitude}
            image={value.image}
          />
        ))}
        <S.FilterListBox>
          <S.FilterBox>
            <S.FilterIcon
              src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
              onClick={props => clickFilter(1)}
            />
            <S.FilterBtn>오션뷰</S.FilterBtn>
          </S.FilterBox>
          <S.FilterBox>
            <S.FilterIcon
              src="https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg"
              onClick={props => clickFilter(2)}
            />
            <S.FilterBtn>시티뷰</S.FilterBtn>
          </S.FilterBox>
          <S.FilterBox>
            <S.FilterIcon
              src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
              onClick={props => clickFilter(3)}
            />
            <S.FilterBtn>윈터뷰</S.FilterBtn>
          </S.FilterBox>
          <S.FilterBox>
            <S.FilterIcon
              src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
              onClick={props => clickFilter(4)}
            />
            <S.FilterBtn>마운틴뷰</S.FilterBtn>
          </S.FilterBox>
          <S.FilterBox>
            <S.FilterIcon
              src="https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg"
              onClick={props => clickFilter(5)}
            />
            <S.FilterBtn>전체</S.FilterBtn>
          </S.FilterBox>
        </S.FilterListBox>
      </Map>
    </>
  );
};
export default MainMap;

const S = {
  Image: styled.img`
    width: 200px;
    height: 160px;
    object-fit: cover;
  `,

  FilterListBox: styled.div`
    ${variables.flex('column', 'center', 'center')}
    position: fixed;
    width: 150px;
    height: 200px;
    z-index: 999;
    top: 40%;
    left: 90%;
  `,

  FilterBox: styled.div`
    ${variables.flex('column', 'center', 'center')}
    margin-top:10px;
  `,

  FilterBtn: styled.div`
    font-size: 10px;
  `,

  FilterIcon: styled.img`
    width: 40px;
    height: 40px;
    opacity: 0.7;
    cursor: pointer;
  `,
};
