import React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import SignIn from '../SignIn/SignIn';

const ProfileMenu = ({ setIsShowing }) => {
  const profile = useRef();
  const [showLogin, setShowLogin] = useState(false);

  const openLogin = () => {
    setShowLogin(true);
  };

  const handleProfileMenu = e => {
    profile.current.contains(e.target) || setIsShowing(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleProfileMenu);
    return () => {
      document.removeEventListener('mousedown', handleProfileMenu);
    };
  }, []);

  return (
    <S.ProfileWrapper ref={profile}>
      <ul>
        <S.ListItem onClick={openLogin}>로그인 또는 회원가입</S.ListItem>
        <S.ListItem>숙소 호스트 되기</S.ListItem>
        <S.ListItem>체험 호스팅하기</S.ListItem>
        <S.ListItem>도움말</S.ListItem>
      </ul>
      {showLogin && (
        <SignIn showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </S.ProfileWrapper>
  );
};

export default ProfileMenu;

const S = {
  ProfileWrapper: styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    border-radius: 20px;
    box-shadow: ${theme.boxShadow.dropdown};
  `,

  ListItem: styled.li`
    padding: 20px;
    font-size: 14px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }

    &:first-child {
      border-radius: 20px 20px 0 0;
    }

    &:last-child {
      border-radius: 0 0 20px 20px;
    }

    &:nth-child(2) {
      border-bottom: 1px solid ${theme.colors.grayScale[1]};
    }
  `,
};
