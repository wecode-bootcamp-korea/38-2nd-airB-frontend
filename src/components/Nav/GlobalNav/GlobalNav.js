import React from 'react';
import styled from 'styled-components/macro';
import { BsSearch, BsGlobe, BsList, BsPersonCircle } from 'react-icons/bs';
import Profile from './modals/Profile';
import UserProfile from './modals/UserProfile';
import theme from '../../../styles/theme';
import variables from '../../../styles/variables';

const GlobalNav = ({
  handleSearchBar,
  selectedLocation,
  startDate,
  endDate,
  guestNum,
  dateToString,
  navigate,
  isProfileModalOpen,
  setIsProfileModalOpen,
  isSignInModalOpen,
  setIsSignInModalOpen,
  handleProfileModal,
}) => {
  const ProfileComponent = {
    1: (
      <Profile
        isProfileModalOpen={isProfileModalOpen}
        setIsProfileModalOpen={setIsProfileModalOpen}
        isSignInModalOpen={isSignInModalOpen}
        setIsSignInModalOpen={setIsSignInModalOpen}
        navigate={navigate}
      />
    ),
    2: (
      <UserProfile
        isProfileModalOpen={isProfileModalOpen}
        setIsProfileModalOpen={setIsProfileModalOpen}
        navigate={navigate}
      />
    ),
  };

  return (
    <S.TopNavBar>
      <S.TopNavWrapper>
        <S.LogoBox>
          <S.LogoImg src="./images/logo.png" alt="logo" />
        </S.LogoBox>
        <S.SearchContainer onClick={handleSearchBar}>
          <S.SearchBox>
            <S.SearchBtn>
              {selectedLocation ? selectedLocation : '어디든지'}
            </S.SearchBtn>
          </S.SearchBox>
          <S.Separation />
          <S.SearchBox>
            <S.SearchBtn>
              {startDate && endDate
                ? `${dateToString(startDate)} ~ ${dateToString(endDate)}`
                : '언제든지'}
            </S.SearchBtn>
          </S.SearchBox>
          <S.Separation />
          <S.SearchBox>
            <S.SearchBtn>
              {guestNum === 0 ? '게스트 추가' : `게스트 ${guestNum}명`}
            </S.SearchBtn>
            <S.SearchIcon>
              <BsSearch />
            </S.SearchIcon>
          </S.SearchBox>
        </S.SearchContainer>
        <S.UserContainer>
          <S.UserWrapper>
            <S.SwitchUserBtn onClick={() => navigate('/host')}>
              호스트 되기
            </S.SwitchUserBtn>
            <S.UserLocationIconContainers>
              <BsGlobe />
            </S.UserLocationIconContainers>
            <S.UserInfoGroup onClick={handleProfileModal}>
              <S.UserInfoContainers>
                <S.UserInfoMenuIcon>
                  <BsList />
                </S.UserInfoMenuIcon>
                <S.UserInfoProfileIcon>
                  <BsPersonCircle />
                </S.UserInfoProfileIcon>
              </S.UserInfoContainers>
            </S.UserInfoGroup>
            {isProfileModalOpen && ProfileComponent['1']}
          </S.UserWrapper>
        </S.UserContainer>
      </S.TopNavWrapper>
    </S.TopNavBar>
  );
};

export default GlobalNav;

const S = {
  TopNavBar: styled.header`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    opacity: 1;
    z-index: 102;
    background-color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.transparentBlack0};
  `,

  TopNavWrapper: styled.div`
    width: 100%;
    max-width: 1760px;
    margin: 0 auto;
    padding: 0 30px;
  `,

  LogoBox: styled.div`
    position: relative;
    transform: translateY(10px);
    cursor: pointer;
  `,

  LogoImg: styled.img`
    display: block;
    width: 90px;
  `,

  SearchContainer: styled.div`
    position: absolute;
    top: 15px;
    left: 50%;
    ${variables.flex('row', 'center', 'center')};
    background-color: ${theme.colors.white};
    width: auto;
    padding: 0 10px;
    border: 1px solid ${theme.colors.transparentBlack2};
    border-radius: 24px;
    box-shadow: ${theme.colors.transparentBlack2} 0px 4px 12px;
    transform: translateX(-50%);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      box-shadow: ${theme.colors.transparentBlack2} 5px 5px 20px;
    }
  `,

  Separation: styled.span`
    display: block;
    width: 1px;
    height: 24px;
    background-color: ${theme.colors.grayScale[1]};
  `,

  SearchBox: styled.div`
    position: relative;
    ${variables.flex('row', 'center', 'center')};
    padding: 0 16px;
  `,

  SearchBtn: styled.div`
    position: relative;
    ${variables.flex('row', 'center', 'center')};
    width: fit-content;
    height: 48px;
    white-space: nowrap;
    font-size: 14px;
    cursor: pointer;
  `,

  SearchIcon: styled.div`
    ${variables.flex('row', 'center', 'center')};
    width: 32px;
    height: 32px;
    background-color: ${theme.colors.skyblue};
    border-radius: 50%;
    margin-left: 10px;
    font-size: 16px;
    color: ${theme.colors.white};
    cursor: pointer;
  `,

  UserContainer: styled.div`
    position: absolute;
    right: 30px;
    top: 15px;
    ${variables.flex('row', 'flex-end', 'center')};
    width: 437px;
  `,

  UserWrapper: styled.div`
    ${variables.flex('row', 'center', 'center')};
  `,

  SwitchUserBtn: styled.div`
    position: relative;
    ${variables.flex('row', 'center', 'center')};
    width: 120px;
    padding: 14px;
    background-color: ${theme.colors.white};
    border-radius: 24px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.transparentBlack0};
    }
  `,

  UserLocationIconContainers: styled.div`
    position: relative;
    ${variables.flex('row', 'center', 'center')};
    width: 46px;
    background-color: ${theme.colors.white};
    padding: 14px;
    font-size: 18px;
    border-radius: 24px;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.transparentBlack0};
    }
  `,

  UserInfoGroup: styled.div`
    position: relative;
  `,

  UserInfoContainers: styled.div`
    ${variables.flex('row', 'center', 'center')};
    gap: 0.5rem;
    padding: 5px 10px;
    width: 77px;
    margin-left: 10px;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.transparentBlack2};
    border-radius: 24px;
    transition: 0.3s;

    &:hover {
      background-color: ${theme.colors.white};
      box-shadow: ${theme.colors.transparentBlack1} 0px 4px 12px;
      cursor: pointer;
    }
  `,

  UserInfoMenuIcon: styled.div`
    font-size: 20px;
  `,

  UserInfoProfileIcon: styled.div`
    font-size: 30px;
    color: rgba(0, 0, 0, 0.3);
  `,
};
