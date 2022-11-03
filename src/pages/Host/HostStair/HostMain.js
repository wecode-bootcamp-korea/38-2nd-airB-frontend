import React from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

const HostMain = () => {
  return (
    <S.HostQuestionBox>
      <S.HostQuestionMain>간단한 8 단계로 호스팅 시작하기</S.HostQuestionMain>
      <S.HostQuestionDesc>
        에어비올비 호스트가 되어보세요. 에어비올비에서 모든 과정을 도와드립니다.
      </S.HostQuestionDesc>
    </S.HostQuestionBox>
  );
};
export default HostMain;

const S = {
  HostQuestionBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    height: 78%;
    animation-name: fadeOut;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  HostQuestionMain: styled.div`
    text-align: center;
    color: white;
    font-size: 40px;
  `,

  HostQuestionDesc: styled.div`
    ${variables.flex('column', 'center', 'center')};
    position: relative;
    text-align: center;
    width: 310px;
    color: white;
    font-size: 15px;
    margin-top: 20px;
    animation-name: motion;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes motion {
      0% {
        bottom: 20px;
      }
      100% {
        bottom: 0px;
      }
    }
  `,

  ResultNone: styled.div`
    display: none;
  `,
};
