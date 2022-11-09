import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components/macro';
import theme from '../../../styles/theme';
import variables from '../../../styles/variables';
import { dateToString, dateToStringFormat } from '../../../utils/format';
import { convertQueryObjToString, queryObj } from '../../../utils/queryString';
import Calendar from './modals/Calendar';
import Guest from './modals/Guest';
import Location from './modals/Location';

const SearchDetail = ({
  setIsOpenSearchBar,
  modalRef,
  onChange,
  endDate,
  startDate,
  increaseGuestNum,
  decreaseGuestNum,
  guestNum,
  setSelectedLocation,
  selectedLocation,
  navigate,
}) => {
  const [currentId, setCurrentId] = useState(null);

  const onClickOptionBtn = option => e => {
    setCurrentId(option);
  };

  const clickOutsideModal = e => {
    if (modalRef.current === e.target) {
      setIsOpenSearchBar(false);
      setCurrentId(0);
    }
  };

  const locationToNumber = location => {
    if (location === '서울') {
      return 1;
    } else if (location === '경기') {
      return 2;
    } else if (location === '인천') {
      return 3;
    }
  };

  const filterRooms = e => {
    e.stopPropagation();
    const checkIn = startDate ? `${dateToStringFormat(startDate)}` : '';
    const checkOut = endDate ? `${dateToStringFormat(endDate)}` : '';
    const destination =
      selectedLocation !== '여행지 검색' && selectedLocation !== '어디든지'
        ? `${locationToNumber(selectedLocation)}`
        : '';
    const totalGuestNum = guestNum ? `${guestNum}` : '';

    setIsOpenSearchBar(false);
    setCurrentId(0);

    const filtered = {
      ...queryObj,
      city: `${destination}`,
      guest: `${totalGuestNum}`,
      checkIn: `${checkIn}`,
      checkOut: `${checkOut}`,
    };

    fetch(
      `http://10.58.52.51:3000/product/option${convertQueryObjToString(
        filtered
      )}`
    )
      .then(res => res.json())
      .then(console.log(checkIn));

    navigate(
      `?city=${destination}&guest=${totalGuestNum}&checkIn=${checkIn}&checkOut=${checkOut}`
    );
  };

  const ModalComponents = {
    Location: (
      <Location
        locationModalIsOpen={currentId === 'Location'}
        currentId={currentId}
        setSelectedLocation={setSelectedLocation}
      />
    ),
    Calendar: (
      <Calendar
        dateModalIsOpen={currentId === 'Calendar'}
        currentId={currentId}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
      />
    ),
    Guest: (
      <Guest
        guestModalIsOpen={currentId === 'Guest'}
        currentId={currentId}
        increaseGuestNum={increaseGuestNum}
        decreaseGuestNum={decreaseGuestNum}
        guestNum={guestNum}
      />
    ),
  };

  return (
    <S.SearchDetailWrapper>
      {currentId && (
        <S.ModalOverLay onClick={clickOutsideModal} ref={modalRef} />
      )}
      <S.DetailInner>
        <S.SearchOptionContainer>
          <S.LocationOptionWrapper onClick={onClickOptionBtn('Location')}>
            <S.OptionTitle>여행지</S.OptionTitle>
            <S.LocationValue>
              {selectedLocation !== '어디든지'
                ? selectedLocation
                : '여행지 검색'}
            </S.LocationValue>
          </S.LocationOptionWrapper>
        </S.SearchOptionContainer>
        <S.SearchOptionContainer>
          <S.DateOptionWrapper onClick={onClickOptionBtn('Calendar')}>
            <S.DateOption>
              <S.OptionTitle>체크인</S.OptionTitle>
              <S.DateSpan>
                {startDate ? `${dateToString(startDate)}` : '날짜 선택'}
              </S.DateSpan>
            </S.DateOption>
            <S.DateOption>
              <S.OptionTitle>체크아웃</S.OptionTitle>
              <S.DateSpan>
                {endDate ? `${dateToString(endDate)}` : '날짜 선택'}
              </S.DateSpan>
            </S.DateOption>
          </S.DateOptionWrapper>
        </S.SearchOptionContainer>
        <S.SearchOptionContainer>
          <S.GuestOptionWrapper onClick={onClickOptionBtn('Guest')}>
            <div>
              <S.OptionTitle>여행자</S.OptionTitle>
              <S.GuestSpan>
                {guestNum !== 0 ? `게스트 ${guestNum}명` : '게스트 추가'}
              </S.GuestSpan>
            </div>
            <S.SearchIconContainer onClick={filterRooms}>
              <BsSearch />
            </S.SearchIconContainer>
          </S.GuestOptionWrapper>
        </S.SearchOptionContainer>
        {ModalComponents[currentId]}
      </S.DetailInner>
    </S.SearchDetailWrapper>
  );
};

export default SearchDetail;

const S = {
  SearchDetailWrapper: styled.div``,

  ModalOverLay: styled.div`
    position: absolute;
    top: 170px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
  `,

  DetailInner: styled.div`
    ${variables.flex('row', 'flex-start', 'center')};
    width: 780px;
    margin: 0 auto;
    border: 1px solid ${theme.colors.grayScale[0]};
    height: auto;
    border-radius: 30px;
  `,

  OptionTitle: styled.div`
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 5px;
  `,

  SearchOptionContainer: styled.div`
    ${variables.flex('row', 'flex-start', 'center')};
    flex-basis: 100%;
  `,

  LocationOptionWrapper: styled.div`
    ${variables.flex('column', 'center', 'flex-start')};
    width: 100%;
    height: 60px;
    border-radius: 30px;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.grayScale[0]};
    }
  `,

  LocationValue: styled.div`
    background-color: transparent;
    font-size: 12px;
    color: ${theme.colors.grayScale[2]};
  `,

  DateOptionWrapper: styled.div`
    ${variables.flex('row', 'flex-start', 'center')};
    width: 100%;
    height: 60px;
  `,

  DateOption: styled.div`
    ${variables.flex('column', 'center', 'flex-start')};
    flex-basis: 100%;
    height: 60px;
    border-radius: 30px;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.grayScale[0]};
    }
  `,

  DateSpan: styled.span`
    font-size: 12px;
    color: #555;
  `,

  GuestOptionWrapper: styled.div`
    ${variables.flex('row', 'space-between', 'center')};
    width: 100%;
    height: 60px;
    border-radius: 30px;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.grayScale[0]};
    }
  `,

  GuestSpan: styled.span`
    font-size: 12px;
    color: ${theme.colors.grayScale[2]};
  `,

  SearchIconContainer: styled.div`
    ${variables.flex('row', 'center', 'center')};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${theme.colors.middleBlue};
    color: ${theme.colors.white};
  `,
};
