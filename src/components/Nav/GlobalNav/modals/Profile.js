import React from 'react';
import styled from 'styled-components/macro';
import theme from '../../../../styles/theme';

const Profile = ({
  isProfileModalOpen,
  setIsProfileModalOpen,
  setIsSignInModalOpen,
  navigate,
}) => {
  return (
    <>
      <S.ProfileModalOverlay
        onClick={() => {
          setIsProfileModalOpen(false);
        }}
      />
      <S.ProfileContainer
        active={isProfileModalOpen}
        onClick={e => e.stopPropagation()}
      >
        <S.ProfileWrapper>
          <ul
            onClick={() => {
              setIsProfileModalOpen(prev => !prev);
            }}
          >
            <S.ProfileListItem
              onClick={() => setIsSignInModalOpen(prev => !prev)}
            >
              로그인
            </S.ProfileListItem>
            <S.ProfileListItem>회원가입</S.ProfileListItem>
            <S.Separation />
            <S.ProfileListItem onClick={() => navigate('/host')}>
              숙소 호스트 되기
            </S.ProfileListItem>
            <S.ProfileListItem>체험 호스팅하기</S.ProfileListItem>
            <S.ProfileListItem>도움말</S.ProfileListItem>
          </ul>
        </S.ProfileWrapper>
      </S.ProfileContainer>
    </>
  );
};

export default Profile;

const S = {
  ProfileModalOverlay: styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  `,

  ProfileContainer: styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    width: 300px;
    height: auto;
    border-radius: 24px;
    display: ${({ active }) => (active ? 'block' : 'none')};
    background-color: ${theme.colors.white};
    padding: 18px 0;
    box-shadow: 1px 1px 10px ${theme.colors.transparentBlack[2]};
    z-index: ${theme.levels.profileModal};
  `,

  ProfileWrapper: styled.div`
    overflow: hidden;
  `,

  ProfileListItem: styled.li`
    padding: 24px 20px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.grayScale[0]};
    }
  `,

  Separation: styled.span`
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.grayScale[0]};
  `,
};
