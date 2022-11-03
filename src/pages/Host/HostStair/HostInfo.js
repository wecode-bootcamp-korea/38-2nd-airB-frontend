import React, { useContext } from 'react';
import HostStore, { HostContext } from '../User';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';

const HostInfo = () => {
  const titleInput = e => {
    setTitle(e.target.value);
  };
  const descriptionInput = e => {
    setdescription(e.target.value);
  };

  const context = useContext(HostContext);
  const { title, setTitle, description, setdescription } = context;

  return (
    <HostStore>
      <S.HostQuestionBox>
        <S.HostInfoMessageBox>
          <S.HostQuestionDesc>숙소 이름 정하기</S.HostQuestionDesc>
          <S.HostInfoMessage>
            숙소 이름에서 숙소를 차별화할 수 있는 특징을 강조해야 합니다.
          </S.HostInfoMessage>
          <S.Hightlight>숙소 이름 가이드라인 확인하기</S.Hightlight>
          <S.InputTitle placeholder="아름다운 이름" onChange={titleInput} />
        </S.HostInfoMessageBox>
        <S.HostInfoMessageBox>
          <S.HostQuestionDesc>숙소 설명 하기</S.HostQuestionDesc>
          <S.InputBox
            placeholder="편안함을 자랑하는 이곳에서 즐거운 시간을 보내실 수 있을것입니다."
            onChange={descriptionInput}
          />
        </S.HostInfoMessageBox>
      </S.HostQuestionBox>
    </HostStore>
  );
};
export default HostInfo;

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
    width: 230px;
    color: white;
    font-size: 30px;
  `,

  HostQuestionDesc: styled.div`
    text-align: center;
    width: 320px;
    color: white;
    font-size: 40px;
    margin: 20px 0;
  `,

  HostInfoMessageBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    bottom: 40px;
  `,

  HostInfoMessage: styled.div`
    color: gray;
    margin-top: 10px;
  `,

  Hightlight: styled.div`
    width: 205px;
    color: white;
    border-bottom: 1px solid white;
    margin-top: 10px;
  `,

  InputBox: styled.input`
    width: 400px;
    height: 100px;
    border-radius: 10px;
    word-wrap: break-word;
    position: relative;
    margin-bottom: 50px;
    bottom: 0px;
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

  InputTitle: styled.input`
    position: relative;
    height: 50px;
    width: 400px;
    border-radius: 10px;
    word-wrap: break-word;
    margin: 20px 50px;
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

    ::placeholder {
      transform: translate(20px);
    }
  `,

  ResultNone: styled.div`
    display: none;
  `,
};
