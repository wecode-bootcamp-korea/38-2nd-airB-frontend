import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components/macro';
import Location from './modals/Location';
import Calendar from './modals/Calendar';
import Guest from './modals/Guest';
import variables from '../../../styles/variables';
import theme from '../../../styles/theme';

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
  dateToString,
}) => {
  const [currentId, setCurrentId] = useState(0);
  const [dateModalIsOpen, setDateModalIsOpen] = useState(false);
  const [locationModalIsOpen, setLocationModalIsOpen] = useState(false);
  const [guestModalIsOpen, setGuestModalIsOpen] = useState(false);

  const clickHandler = id => {
    setCurrentId(id);
  };

  const overLayClick = e => {
    if (modalRef.current === e.target) {
      setDateModalIsOpen(false);
      setLocationModalIsOpen(false);
      setGuestModalIsOpen(false);
      setIsOpenSearchBar(false);
      setCurrentId(0);
    }
  };

  const ModalComponents = {
    1: (
      <Location
        locationModalIsOpen={locationModalIsOpen}
        currentId={currentId}
        setSelectedLocation={setSelectedLocation}
      />
    ),
    2: (
      <Calendar
        dateModalIsOpen={dateModalIsOpen}
        currentId={currentId}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
      />
    ),
    3: (
      <Guest
        guestModalIsOpen={guestModalIsOpen}
        currentId={currentId}
        increaseGuestNum={increaseGuestNum}
        decreaseGuestNum={decreaseGuestNum}
        guestNum={guestNum}
      />
    ),
  };

  return (
    <S.SearchDetailWrapper>
      {locationModalIsOpen || dateModalIsOpen || guestModalIsOpen ? (
        <S.ModalOverLay onClick={overLayClick} ref={modalRef} />
      ) : null}
      <S.DetailInner>
        <S.SearchOptionContainer>
          <S.LocationOptionWrapper
            onClick={() => {
              setLocationModalIsOpen(true);
              clickHandler(1);
            }}
          >
            <S.OptionTitle>여행지</S.OptionTitle>
            <S.LocationValue>
              {selectedLocation ? selectedLocation : '여행지 검색'}
            </S.LocationValue>
          </S.LocationOptionWrapper>
        </S.SearchOptionContainer>
        <S.SearchOptionContainer>
          <S.DateOptionWrapper
            onClick={() => {
              setDateModalIsOpen(true);
              clickHandler(2);
            }}
          >
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
          <S.GuestOptionWrapper
            onClick={() => {
              setGuestModalIsOpen(true);
              clickHandler(3);
            }}
          >
            <div>
              <S.OptionTitle>여행자</S.OptionTitle>
              <S.GuestSpan>
                {guestNum !== 0 ? `게스트 ${guestNum}명` : '게스트 추가'}
              </S.GuestSpan>
            </div>
            <S.SearchIconConatiner>
              <BsSearch />
            </S.SearchIconConatiner>
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
    ${variables.flex('row', 'flexstart', 'center')};
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

  SearchIconConatiner: styled.div`
    ${variables.flex('row', 'center', 'center')};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${theme.colors.skyblue};
    color: ${theme.colors.white};
  `,
};
