import React from 'react';
import styled from 'styled-components';
import { BsXCircle } from 'react-icons/bs';
import variables from '../../styles/variables';

export const APIKEY = process.env.REACT_APP_API_KEY;
export const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${APIKEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

const SignIn = ({ setIsModalOpen }) => {
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div>
      <S.SignInTitleBox>
        <S.SignInCloseBtn onClick={() => setIsModalOpen(prev => !prev)}>
          <BsXCircle />
        </S.SignInCloseBtn>
        <h1>카카오톡으로 회원가입 또는 로그인</h1>
      </S.SignInTitleBox>
      <S.SignInWrapper>
        <h3>AirB에 오신 것을 환영합니다.</h3>
        <S.AuthButton onClick={handleLogin}>
          카카오톡으로 로그인하기
        </S.AuthButton>
      </S.SignInWrapper>
    </div>
  );
};

export default SignIn;

const S = {
  SignInTitleBox: styled.div`
    position: relative;
    ${variables.flex('row', 'center', 'center')};
    padding: 20px 30px;
    border-bottom: 1px solid #eee;
  `,

  SignInCloseBtn: styled.button`
    position: absolute;
    left: 30px;
    top: 50%;
    padding: 0;
    border: none;
    height: 24px;
    background-color: transparent;
    font-size: 24px;
    transform: translateY(-50%);
    cursor: pointer;
  `,

  SignInWrapper: styled.div`
    ${variables.flex('column', 'center', 'start')};
    padding: 40px 30px;
  `,

  AuthButton: styled.button`
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 10px;
    margin-top: 40px;
    background-color: #fee500;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #222;
      color: white;
    }
  `,
};
