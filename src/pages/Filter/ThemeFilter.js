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
  { id: 1, name: '?????????', icon: FaUmbrellaBeach },
  { id: 2, name: '????????????', icon: FaMountain },
  { id: 3, name: '????????????', icon: FaRegSnowflake },
  { id: 4, name: '?????????', icon: FaHotel },
  { id: 5, name: '?????????', icon: SiAltiumdesigner },
  { id: 6, name: '????????? ??????', icon: GiPisaTower },
  { id: 7, name: '?????????', icon: GiRiver },
  { id: 8, name: '??????????????? ??????', icon: GiLighthouse },
  { id: 9, name: '????????? ??? ?????? ?????? ??????', icon: GiSkier },
  { id: 10, name: '????????? ??????', icon: GrOverview },
  { id: 11, name: '???????????????', icon: GiHouseKeys },
  { id: 12, name: '????????????', icon: GiParkBench },
  { id: 13, name: '????????? ??????', icon: GiGrass },
  { id: 14, name: '?????? ?????? ???', icon: GiBeachBucket },
  { id: 15, name: '??????', icon: GiKimono },
  { id: 16, name: '?????????', icon: GiCaravan },
  { id: 17, name: '?????? ?????????', icon: GiPoolDive },
  { id: 18, name: '????????????', icon: GiBirchTrees },
  { id: 19, name: '??????', icon: GiFarmer },
  { id: 20, name: '????????? ??????', icon: GiBirdHouse },
  { id: 21, name: '??????', icon: GiCastle },
  { id: 22, name: '??????', icon: GiFamilyHouse },
  { id: 23, name: '?????? ??????', icon: GiPalmTree },
  { id: 24, name: 'Luxe', icon: GiMoneyStack },
];
