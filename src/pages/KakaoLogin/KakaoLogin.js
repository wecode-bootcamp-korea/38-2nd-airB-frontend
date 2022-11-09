import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import variables from '../../styles/variables';

const KakaoLogin = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get('code');

  useEffect(() => {
    fetch(`http://10.58.52.51:3000/user/signin?authorizationCode=${code}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        if (typeof res.data === 'object') {
          alert('가입정보가 유효하지 않아, 회원가입 페이지로 이동합니다.');
          navigate('/');
        } else {
          localStorage.setItem('accessToken', res.userInfo.accessToken);
          localStorage.setItem('userId', res.userInfo.userId);
          navigate('/');
        }
      });
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
    text-align: center;
  `,
};
