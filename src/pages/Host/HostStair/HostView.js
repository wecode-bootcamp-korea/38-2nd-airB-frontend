import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';
import HostStore, { HostContext } from '../User';

const HostView = () => {
  const clickView = props => {
    setView(props);
  };
  const clickCity = props => {
    setCity(props);
  };

  const context = useContext(HostContext);
  const { view, setView, city, setCity } = context;

  return (
    <HostStore>
      <S.HostViewBox>
        <S.HostViewListBox>
          <S.HostHouseView
            type="radio"
            oneView={view}
            onMouseDown={ocean => clickView(1)}
          >
            오션뷰
          </S.HostHouseView>
          <S.HostHouseView
            type="radio"
            twoView={view}
            onMouseDown={city => clickView(2)}
          >
            시티뷰
          </S.HostHouseView>
          <S.HostHouseView
            type="radio"
            threeView={view}
            onMouseDown={winter => clickView(3)}
          >
            원티뷰
          </S.HostHouseView>
          <S.HostHouseView
            type="radio"
            fourView={view}
            onMouseDown={mountain => clickView(4)}
          >
            마운틴뷰
          </S.HostHouseView>
        </S.HostViewListBox>
        <S.HostViewListBox>
          <S.HostHouseView
            type="radio"
            oneCity={city}
            onMouseDown={seoul => clickCity(1)}
          >
            서울
          </S.HostHouseView>
          <S.HostHouseView
            type="radio"
            twoCity={city}
            onMouseDown={gyenggi => clickCity(2)}
          >
            경기
          </S.HostHouseView>
          <S.HostHouseView
            type="radio"
            threeCity={city}
            onMouseDown={incheon => clickCity(3)}
          >
            인천
          </S.HostHouseView>
        </S.HostViewListBox>
      </S.HostViewBox>
    </HostStore>
  );
};
export default HostView;
const S = {
  HostViewBox: styled.div`
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
  HostViewListBox: styled.div`
    ${variables.flex()};
    width: 100%;
    height: 20%;
  `,

  HostHouseView: styled.button`
    width: 15%;
    height: 40px;
    border-radius: 15px;
    margin: 10px 10px;
    cursor: pointer;
    background-color: ${props => (props.oneView === 1 ? '#4b89dc' : null)};
    background-color: ${props => (props.twoView === 2 ? '#4b89dc' : null)};
    background-color: ${props => (props.threeView === 3 ? '#4b89dc' : null)};
    background-color: ${props => (props.fourView === 4 ? '#4b89dc' : null)};
    background-color: ${props => (props.oneCity === 1 ? '#4b89dc' : null)};
    background-color: ${props => (props.twoCity === 2 ? '#4b89dc' : null)};
    background-color: ${props => (props.threeCity === 3 ? '#4b89dc' : null)};
  `,

  ResultNone: styled.div`
    display: none;
  `,
};
