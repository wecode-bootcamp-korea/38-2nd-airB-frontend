import React from 'react';
import styled from 'styled-components/macro';
import theme from '../../../styles/theme';
import variables from '../../../styles/variables';
import SearchDetail from './SearchDetail';

const Search = ({
  isOpenSearchBar,
  onCloseModal,
  setIsOpenSearchBar,
  onChange,
  modalRef,
  startDate,
  endDate,
  decreaseGuestNum,
  increaseGuestNum,
  guestNum,
  selectedLocation,
  setSelectedLocation,
  navigate,
}) => {
  return (
    <S.SearchSection active={isOpenSearchBar}>
      <S.SearchOverlay onClick={onCloseModal} />
      <S.SearchWrapper>
        <S.SearchMenuContainer>
          <S.SearchMenuWrapper>
            <S.Menu>숙소</S.Menu>
            <S.Menu>체험</S.Menu>
            <S.Menu>온라인 체험</S.Menu>
          </S.SearchMenuWrapper>
        </S.SearchMenuContainer>
        <div>
          <SearchDetail
            setIsOpenSearchBar={setIsOpenSearchBar}
            modalRef={modalRef}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            decreaseGuestNum={decreaseGuestNum}
            increaseGuestNum={increaseGuestNum}
            guestNum={guestNum}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            navigate={navigate}
          />
        </div>
      </S.SearchWrapper>
    </S.SearchSection>
  );
};

export default Search;

const S = {
  SearchSection: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: ${({ active }) => (active ? 'block' : 'none')};
    width: 100%;
    background-color: ${theme.colors.white};
    padding-bottom: 30px;
    z-index: ${theme.levels.searchModal};
  `,

  SearchOverlay: styled.div`
    position: absolute;
    top: 170px;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.overlay.search};
  `,

  SearchWrapper: styled.div`
    position: relative;
    max-width: 780px;
    margin: 0 auto;
  `,

  SearchMenuContainer: styled.div`
    ${variables.flex('row', 'center', 'center')};
    width: 504px;
    margin: 40px auto 20px auto;
  `,

  SearchMenuWrapper: styled.div`
    ${variables.flex('row', 'center', 'center')};
    gap: 2rem;
  `,

  Menu: styled.div`
    position: relative;
    width: fit-content;
    white-space: nowrap;
    cursor: pointer;

    &:first-child::after {
      content: '';
      position: absolute;
      left: 0px;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: ${theme.colors.black};
      border-radius: 10px;
      opacity: 1;
      transition: 0.3s;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0px;
      width: 0px;
      height: 2px;
      background-color: ${theme.colors.black};
      border-radius: 10px;
      opacity: 0;
      transition: 0.3s;
    }

    &:hover {
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
  `,
};
