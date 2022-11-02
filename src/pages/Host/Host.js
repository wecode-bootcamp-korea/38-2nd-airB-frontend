import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components/macro';
import variables from '../../styles/variables';
import HostLanding from './HostMessage/HostLanding';
import HostResult from './HostResult';
import HostBed from './HostStair/HostBed';
import HostHouse from './HostStair/HostHouse';
import HostInfo from './HostStair/HostInfo';
import HostMain from './HostStair/HostMain';
import HostMap from './HostStair/HostMap';
import HostPicture from './HostStair/HostPicture';
import HostPrice from './HostStair/HostPrice';
import HostView from './HostStair/HostView';
import HostStore, { HostContext } from './User';

const Host = () => {
  const [pageCount, setPageCount] = useState(0);
  const navigate = useNavigate();

  const check = () => {
    alert('완료버튼을 눌러주세요. 😭');
    navigate('/host');
  };
  const nextPage = () => {
    pageCount === 8 ? check() : setPageCount(prev => prev + 1);
  };
  const backPage = () => {
    pageCount === 0 ? setPageCount(8) : setPageCount(prev => prev - 1);
  };

  const nextGoPage = [
    <HostMain key="HostMain" />,
    <HostHouse key="HostHouse" />,
    <HostView key="HostView" />,
    <HostMap key="HostMap" />,
    <HostBed key="HostBed" />,
    <HostPicture key="HostPicture" />,
    <HostInfo key="HostInfo" />,
    <HostPrice key="HostPrice" />,
    <HostResult key="HostResult" />,
  ];
  const message = [
    <HostLanding
      key="HostVideo"
      video="https://user-images.githubusercontent.com/110619143/199485007-824ff3d8-f66d-4466-a317-b872a9daa185.mp4"
    />,
    <HostLanding
      key="Locationmessage"
      message="게스트가 머무르게 될 숙소의 종류가 무엇인가요?"
    />,
    <HostLanding key="Viewmessage" message="멋진 뷰와 지역을 선택해주세요." />,
    <HostLanding key="Mapmessage" message="숙소의 정확한 위치는 어디인가요?" />,
    <HostLanding
      key="Housemessage"
      message="숙소에서 맞이할 최대 인원수를 알려주세요."
    />,
    <HostLanding
      key="PhotoVideo"
      video="https://user-images.githubusercontent.com/110619143/199457753-c100958d-ce2f-407e-9cf4-4d04451db054.mp4"
    />,
    <HostLanding key="Housemessage" message="숙소 정보를 입력해주세요." />,
    <HostLanding
      key="PriceVideo"
      video="https://user-images.githubusercontent.com/110619143/199483561-bc1a8945-5e47-4ed3-86fe-cdae2123dd37.mp4"
    />,
    <HostLanding key="resultmessage" message="한 번 더 확인해 주세요." />,
  ];

  const goMain = () => {
    navigate('/');
  };

  return (
    <HostStore>
      <S.HostBox>
        <S.HostBoxCenter>
          <S.HostVideoBox>
            <S.MessageBox>{message[pageCount]}</S.MessageBox>
          </S.HostVideoBox>
          <S.HostQuestion>
            <S.HostQuestionQuitBox>
              <S.HostQuestionQuit onClick={goMain}>나가기</S.HostQuestionQuit>
            </S.HostQuestionQuitBox>
            {nextGoPage[pageCount]}
            <S.HostBar count={pageCount} />
            <S.HostQuestionStartBox>
              {pageCount === 0 ? (
                <S.HiddenBox />
              ) : (
                <S.HostBack onClick={backPage}>뒤로 </S.HostBack>
              )}

              <S.HostQuestionStart onClick={nextPage}>
                {pageCount === 0 ? '시작하기' : '다음'}
              </S.HostQuestionStart>
            </S.HostQuestionStartBox>
          </S.HostQuestion>
        </S.HostBoxCenter>
      </S.HostBox>
      <S.ResultNone>
        <HostResult />
      </S.ResultNone>
    </HostStore>
  );
};
export default Host;

const S = {
  HostBox: styled.div`
    ${variables.flex()};
    width: 100%;
    height: 100vh;
    background: rgb(20, 135, 166);
    background: linear-gradient(
      0deg,
      rgba(20, 135, 166, 1) 14%,
      rgba(7, 112, 152, 1) 23%,
      rgba(5, 39, 184, 1) 96%
    );
  `,

  HostBoxCenter: styled.div`
    ${variables.flex()};
    width: 100%;
  `,

  HostVideoBox: styled.div`
    ${variables.flex()};
    width: 50%;
    height: 100vh;
  `,

  MessageBox: styled.div`
    color: white;
    width: 100%;
    height: 99.6%;
    font-size: 30px;
  `,

  HostQuestion: styled.div`
    background-color: #212121;
    width: 50%;
    height: 100vh;
  `,

  HostQuestionQuitBox: styled.div`
    ${variables.flex('row', 'flex-end', '')};
    width: 100%;
  `,

  HostQuestionQuit: styled.button`
    border-radius: 20px;
    width: 70px;
    height: 25px;
    background-color: gray;
    color: white;
    border: none;
    margin: 25px 35px 20px 0;
    cursor: pointer;
  `,

  HostQuestionStartBox: styled.div`
    ${variables.flex('row', 'space-between', '')};
    width: 100%;
    border-top: 1px solid gray;
  `,

  HostQuestionStart: styled.button`
    background-color: #4b89dc;
    color: white;
    width: 150px;
    height: 55px;
    font-size: 20px;
    margin: 25px 20px 20px 0;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  `,

  HostBack: styled.button`
    width: 70px;
    height: 55px;
    background-color: #4b89dc;
    color: white;
    font-size: 20px;
    margin: 25px 20px 0;
    border-radius: 10px;
    border: none;
    cursor: pointer;
  `,

  HiddenBox: styled.div`
    width: 70px;
    height: 55px;
    margin: 25px 20px 0;
    border-radius: 10px;
  `,

  HostBar: styled.div`
    width: ${({ count }) => (count / 8) * 100}%;
    height: 6px;
    background: rgb(8, 108, 190);
    background: linear-gradient(
      90deg,
      rgba(8, 108, 190, 1) 0%,
      rgba(0, 185, 255, 1) 61%,
      rgba(129, 242, 242, 0.8743872549019608) 100%
    );
    border-radius: 3px;
    transition: 0.8s;
  `,

  Center: styled.div`
    ${variables.flex()};
  `,

  ResultNone: styled.div`
    display: none;
  `,
};
