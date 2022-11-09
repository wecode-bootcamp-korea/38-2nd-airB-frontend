import React, { useState, useEffect, useContext } from 'react';
import {
  FaUmbrellaBeach,
  FaMountain,
  FaRegSnowflake,
  FaHotel,
} from 'react-icons/fa';
import {
  GiPisaTower,
  GiRiver,
  GiLighthouse,
  GiSkier,
  GiFamilyHouse,
  GiParkBench,
  GiGrass,
  GiBeachBucket,
  GiKimono,
  GiCaravan,
  GiPoolDive,
  GiFarmer,
  GiBirdHouse,
  GiCastle,
  GiHouseKeys,
  GiBirchTrees,
  GiPalmTree,
  GiMoneyStack,
} from 'react-icons/gi';
import { GrOverview } from 'react-icons/gr';
import { SiAltiumdesigner } from 'react-icons/si';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';
import { Navigation, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AmenityFilterContext } from '../Main/AmenityFilterContext';

const ThemeFilter = () => {
  const context = useContext(AmenityFilterContext);
  const {
    filterValue,
    setFilterValue,
    setFilterTheme,
    filterTheme,
    url,
    fetchThemeFilter,
    handlePlaceFetcher,
  } = context;

  const saveValue = num => {
    setFilterValue(num);
  };

  return (
    <Sippy
      spaceBetween={0}
      slidesPerView={8}
      slidesPerGroup={8}
      navigation={true}
      modules={[Navigation, Mousewheel]}
      mousewheel={true}
    >
      {REACT_ICONS.map(icon => (
        <OuterDiv key={icon.id}>
          <SliderStyle
            key={icon.id}
            onClick={() => {
              saveValue(icon.id);
              handlePlaceFetcher();
            }}
          >
            <IconWrapper>
              <IconSize>
                <icon.icon />
              </IconSize>
              <IconName>{icon.name}</IconName>
            </IconWrapper>
          </SliderStyle>
        </OuterDiv>
      ))}
    </Sippy>
  );
};

export default ThemeFilter;

const Sippy = styled(Swiper)`
  z-index: 0;
`;

const SliderStyle = styled(SwiperSlide)``;

const OuterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  color: #717171;
  margin: 0;
  &:hover {
    color: black;
    text-decoration: underline;
    text-decoration-thickness: 3px;
    text-underline-offset: 10px;
    cursor: pointer;
  }
`;

const IconSize = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  margin-top: 30px;
`;

const IconName = styled.div`
  font-size: 12px;
  text-align: center;
  padding: 10px 0 20px 0;
`;

const REACT_ICONS = [
  { id: 1, name: '오션뷰', icon: FaUmbrellaBeach },
  { id: 2, name: '마운틴뷰', icon: FaMountain },
  { id: 3, name: '스노잉뷰', icon: FaRegSnowflake },
  { id: 4, name: '시티뷰', icon: FaHotel },
  { id: 5, name: '디자인', icon: SiAltiumdesigner },
  { id: 6, name: '상징적 도시', icon: GiPisaTower },
  { id: 7, name: '호숫가', icon: GiRiver },
  { id: 8, name: '기상천외한 숙소', icon: GiLighthouse },
  { id: 9, name: '스키를 탄 채로 출입 가능', icon: GiSkier },
  { id: 10, name: '최고의 전망', icon: GrOverview },
  { id: 11, name: '셰어하우스', icon: GiHouseKeys },
  { id: 12, name: '국립공원', icon: GiParkBench },
  { id: 13, name: '한적한 시골', icon: GiGrass },
  { id: 14, name: '해변 바로 앞', icon: GiBeachBucket },
  { id: 15, name: '료칸', icon: GiKimono },
  { id: 16, name: '캠핑카', icon: GiCaravan },
  { id: 17, name: '멋진 수영장', icon: GiPoolDive },
  { id: 18, name: '통나무집', icon: GiBirchTrees },
  { id: 19, name: '농장', icon: GiFarmer },
  { id: 20, name: '초소형 주택', icon: GiBirdHouse },
  { id: 21, name: '캐슬', icon: GiCastle },
  { id: 22, name: '저택', icon: GiFamilyHouse },
  { id: 23, name: '열대 지역', icon: GiPalmTree },
  { id: 24, name: 'Luxe', icon: GiMoneyStack },
];
