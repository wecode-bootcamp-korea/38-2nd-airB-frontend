/*global kakao */
import React, { useContext, useEffect, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import styled from 'styled-components/macro';
import variables from '../../styles/variables';
import { HostContext } from './Mapcontext';
import Marker from './Marker';

const MainMap = () => {
  const context = useContext(HostContext);
  const {
    filterTheme,
    setFilterTheme,
    data,
    setData,
    filterlocation,
    setFilterLocation,
    basicLat,
    setBasicLat,
    basicLng,
    setBasicLng,
    basicScale,
    setBasicScale,
  } = context;
  const clickFilter = props => {
    setFilterTheme(props);
  };
  const clickLocation = props => {
    setFilterLocation(props);
  };
  const clickLat = props => {
    setBasicLat(props);
  };
  const clickLng = props => {
    setBasicLng(props);
  };
  const clickScale = props => {
    setBasicScale(props);
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `http://10.58.52.51:3000/product/option?city=${filterlocation}&themeId=${filterTheme}&lowprice=&highprice=&bed=&bathroom=&bedroom=&apartmentType=&guesthouseType=&hotelType=&guest=&checkIn=&checkOut=`
    )
      .then(res => res.json())
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      });
  }, [filterTheme, filterlocation]);

  return (
    <Map
      center={{
        lat: basicLat,
        lng: basicLng,
      }}
      style={{
        width: '100%',
        height: '80vh',
        position: 'fixed',
      }}
      level={basicScale}
    >
      {data.map(value => (
        <Marker
          key={value.id}
          position={{ lat: value.latitude, lng: value.longitude }}
          lat={value.latitude}
          lng={value.longitude}
          image={value.image}
          id={value.id}
        />
      ))}
      <S.FilterListBoxFix>
        <S.FilterListBox>
          <S.FilterTopBox>
            <S.FilterBox>
              <S.FilterIcon
                src="https://a0.muscache.com/pictures/33848f9e-8dd6-4777-b905-ed38342bacb9.jpg"
                onClick={props => {
                  clickFilter('');
                  clickLocation('');
                  clickLat(37.54376416965957);
                  clickLng(126.91244013156506);
                }}
                allViewEffect={filterTheme === ''}
              />
              <S.FilterBtn>전체</S.FilterBtn>
            </S.FilterBox>
            <S.FilterBox>
              <S.FilterIcon
                src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                onClick={props => {
                  clickFilter(1);
                  clickScale(10);
                }}
                allViewEffect={filterTheme === 1}
              />
              <S.FilterBtn>오션뷰</S.FilterBtn>
            </S.FilterBox>
            <S.FilterBox>
              <S.FilterIcon
                src="https://user-images.githubusercontent.com/110619143/200273266-fa4d3d38-2478-468a-83e8-ee6b5757eaa2.png"
                onClick={props => {
                  clickFilter(2);
                  clickScale(10);
                }}
                allViewEffect={filterTheme === 2}
              />
              <S.FilterBtn>시티뷰</S.FilterBtn>
            </S.FilterBox>
            <S.FilterBox>
              <S.FilterIcon
                src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
                onClick={props => {
                  clickFilter(3);
                  clickScale(10);
                }}
                allViewEffect={filterTheme === 3}
              />
              <S.FilterBtn>윈터뷰</S.FilterBtn>
            </S.FilterBox>
            <S.FilterBox>
              <S.FilterIcon
                src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                onClick={props => {
                  clickFilter(4);
                  clickScale(10);
                }}
                allViewEffect={filterTheme === 4}
              />
              <S.FilterBtn>마운틴뷰</S.FilterBtn>
            </S.FilterBox>
          </S.FilterTopBox>
          <S.FilterBar />
          <S.FilterTopBox>
            <S.FilterBox>
              <S.FilterLocationIcon
                src="https://user-images.githubusercontent.com/110619143/200231996-5e52c0c2-2ac8-47bd-9795-183dd98ff62e.png"
                onClick={props => {
                  clickLocation(1);
                  clickLat(37.525964455243724);
                  clickLng(126.982001207249);
                  clickScale(8);
                }}
                allLocationEffect={filterlocation === 1}
              />
              <S.FilterBtn>서울</S.FilterBtn>
            </S.FilterBox>
            <S.FilterBox>
              <S.FilterLocationIcon
                src="https://user-images.githubusercontent.com/110619143/200232042-9c2f9301-1260-48c3-8409-6e864a78b95a.png"
                onClick={props => {
                  clickLocation(2);
                  clickLat(37.52571267363942);
                  clickLng(127.1850893314156);
                  clickScale(11);
                }}
                allLocationEffect={filterlocation === 2}
              />
              <S.FilterBtn>경기</S.FilterBtn>
            </S.FilterBox>
            <S.FilterBox>
              <S.FilterLocationIcon
                src="https://user-images.githubusercontent.com/110619143/200228350-3f7a5833-2aca-4784-9072-4c2495ba7436.png"
                onClick={props => {
                  clickLocation(3);
                  clickLat(37.515101128745535);
                  clickLng(126.61443450597227);
                  clickScale(10);
                }}
                allLocationEffect={filterlocation === 3}
              />
              <S.FilterBtn>인천</S.FilterBtn>
            </S.FilterBox>
          </S.FilterTopBox>
        </S.FilterListBox>
      </S.FilterListBoxFix>
    </Map>
  );
};
export default MainMap;

const S = {
  Image: styled.img`
    width: 200px;
    height: 160px;
    object-fit: cover;
  `,

  FilterListBoxFix: styled.div`
    ${variables.flex()}
    position: fixed;
    width: 100%;
    height: 110px;
    background-color: white;
    z-index: 10;
    top: 80px;
  `,

  FilterListBox: styled.div`
    ${variables.flex('row', 'space-evenly', 'center')}
    width: 800px;
  `,

  FilterBox: styled.div`
    ${variables.flex('column', 'center', 'center')}
    margin-left: 40px;
  `,

  FilterBtn: styled.div`
    font-size: 10px;
    margin-top: 5px;
  `,

  FilterIcon: styled.img`
    width: 30px;
    height: 30px;
    transition: 0.2s;
    cursor: pointer;
    color: blue;
    opacity: ${props => (props.allViewEffect ? '1' : '0.3')};

    &:hover {
      transform: scale(1.2);
    }
  `,

  FilterLocationIcon: styled.img`
    width: 30px;
    height: 30px;
    transition: 0.2s;
    cursor: pointer;
    opacity: ${props => (props.allLocationEffect ? '1' : '0.3')};

    &:hover {
      transform: scale(1.2);
    }
  `,

  FilterTopBox: styled.div`
    ${variables.flex('row', 'space-evenly', 'center')};
    width: 500px;
  `,

  FilterBar: styled.div`
    width: 1px;
    height: 40px;
    margin-left: 80px;
    background-color: lightgrey;
  `,
};
