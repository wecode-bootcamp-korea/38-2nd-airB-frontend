import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { APIKEY, REDIRECT_URI } from '../../components/SignIn/SignIn';
import variables from '../../styles/variables';

const KakaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');
  const accessToken = localStorage.getItem('token');

  const getKakaoToken = () => {
    fetch(`https://kauth.kakao.com/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: accessToken,
      },
      body: `grant_type=authorization_code&client_id=${APIKEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    })
      .then(res => res.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('token', data.access_token);
          navigate('/');
        } else {
          // TODO: 나중에 에러 핸들링 해야함
          // XXX: 좋지않은 방식으로 개발했음 리팩토링 필요
          // HACK: console을 탈취하는 방식으로 구현함. 수정 필요
          navigate('/');
          alert();
        }
      });
  };

  useEffect(() => {
    if (!code) return;
    getKakaoToken();
  }, []);

  return (
    <S.LoginWrapper>
      <S.SuccessMessage>
        잠시만 기다려주세요. 로그인이 진행 중입니다.
      </S.SuccessMessage>
    </S.LoginWrapper>
  );
};

export default KakaoLogin;

const S = {
  LoginWrapper: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 100vh;
    background-color: #eee;
  `,

  SuccessMessage: styled.p`
    ${variables.flex('')};
    text-align: center;
  `,
};
