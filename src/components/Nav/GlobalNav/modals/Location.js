import React from 'react';
import styled from 'styled-components/macro';
import theme from '../../../../styles/theme';
import gyeonggi from 'assets/maps/gyeonggi.png';
import incheon from 'assets/maps/incheon.png';
import seoul from 'assets/maps/seoul.png';

const Location = ({ locationModalIsOpen, currentId, setSelectedLocation }) => {
  return (
    <S.LocationContainer active={locationModalIsOpen} currentId={currentId}>
      <S.LocationWrapper>
        <S.LocationHeader>지역으로 검색하기</S.LocationHeader>
        <S.LocationMapWrapper>
          <S.LocationMapContainer>
            <S.MapImgWrapper
              description="seoul"
              onClick={() => setSelectedLocation('서울')}
              src={gyeonggi}
              alt="서울"
            />
            <S.LocationName>서울</S.LocationName>
          </S.LocationMapContainer>
          <S.LocationMapContainer>
            <S.MapImgWrapper
              description="incheon"
              onClick={() => setSelectedLocation('인천')}
              src={incheon}
              alt="인천"
            />
            <S.LocationName>인천</S.LocationName>
          </S.LocationMapContainer>
          <S.LocationMapContainer>
            <S.MapImgWrapper
              description="gyeonggi"
              onClick={() => setSelectedLocation('경기')}
              src={gyeonggi}
              alt="경기"
            />
            <S.LocationName>경기</S.LocationName>
          </S.LocationMapContainer>
        </S.LocationMapWrapper>
      </S.LocationWrapper>
    </S.LocationContainer>
  );
};

export default Location;

const S = {
  LocationContainer: styled.div`
    position: absolute;
    top: 120px;
    left: 0;
    width: auto;
    height: auto;
    border-radius: 24px;
    display: ${({ active, currentId }) =>
      active && currentId === 'Location' ? 'block' : 'none'};
    background-color: ${theme.colors.white};
    padding: 30px 20px;
    box-shadow: 1px 1px 10px ${theme.colors.transparentBlack2};
  `,

  LocationWrapper: styled.div`
    overflow: hidden;
  `,

  LocationHeader: styled.p`
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 700;
  `,

  LocationMapContainer: styled.div`
    cursor: pointer;
  `,

  LocationMapWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 20px;
  `,

  MapImgWrapper: styled.div`
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.grayScale[0]};
    background-image: ${({ description }) => {
      if (description === 'seoul') {
        return `url(${seoul})`;
      } else if (description === 'incheon') {
        return `url(${incheon})`;
      } else if (description === 'gyeonggi') {
        return `url(${gyeonggi})`;
      }
    }};
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 80px 80px;
    overflow: hidden;
  `,

  MapImage: styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  LocationName: styled.div`
    margin-top: 10px;
    font-size: 14px;
  `,
};
