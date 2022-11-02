import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';
import { HostContext } from '../User';

const HostBed = () => {
  const context = useContext(HostContext);
  const { people, setPeople, bed, setBed, room, setRoom, bath, setBath } =
    context;

  const plusPeople = () => {
    people <= 11 ? setPeople(prev => prev + 1) : setPeople(people);
  };
  const plusBed = () => {
    bed <= 1 ? setBed(prev => prev + 1) : setBed(bed);
  };
  const plusRoom = () => {
    room <= 2 ? setRoom(prev => prev + 1) : setRoom(room);
  };
  const plusBath = () => {
    bath <= 1 ? setBath(prev => prev + 1) : setBath(bath);
  };
  const minusPeople = () => {
    people > 0 ? setPeople(prev => prev - 1) : setPeople(people);
  };
  const minusBed = () => {
    bed > 0 ? setBed(prev => prev - 1) : setBed(bed);
  };
  const minusRoom = () => {
    room > 0 ? setRoom(prev => prev - 1) : setRoom(room);
  };
  const minusBath = () => {
    bath > 0 ? setBath(prev => prev - 1) : setBath(bath);
  };

  return (
    <S.HostQuestionBox>
      <S.HostBedBox>
        <S.HostBedListBox>
          <S.HostBedTitle>게스트</S.HostBedTitle>
          <S.HostBedCountBox>
            <S.Minus onClick={minusPeople}>-</S.Minus>
            <S.Number value={people} readOnly />
            <S.Plus onClick={plusPeople}>+</S.Plus>
          </S.HostBedCountBox>
        </S.HostBedListBox>
        <S.HostBedListBox>
          <S.HostBedTitle>침대</S.HostBedTitle>
          <S.HostBedCountBox>
            <S.Minus onClick={minusBed}>-</S.Minus>
            <S.Number value={bed} readOnly />
            <S.Plus onClick={plusBed}>+</S.Plus>
          </S.HostBedCountBox>
        </S.HostBedListBox>
        <S.HostBedListBox>
          <S.HostBedTitle>침실</S.HostBedTitle>
          <S.HostBedCountBox>
            <S.Minus onClick={minusRoom}>-</S.Minus>
            <S.Number value={room} readOnly />
            <S.Plus onClick={plusRoom}>+</S.Plus>
          </S.HostBedCountBox>
        </S.HostBedListBox>
        <S.HostBedListBox>
          <S.HostBedTitle>욕실</S.HostBedTitle>
          <S.HostBedCountBox>
            <S.Minus onClick={minusBath}>-</S.Minus>
            <S.Number value={bath} readOnly />
            <S.Plus onClick={plusBath}>+</S.Plus>
          </S.HostBedCountBox>
        </S.HostBedListBox>
      </S.HostBedBox>
    </S.HostQuestionBox>
  );
};
export default HostBed;

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

  HostBedBox: styled.div`
    width: 300px;
  `,

  HostBedListBox: styled.div`
    ${variables.flex('row', 'space-between', '')};
    width: 100%;
    margin-top: 10px;
  `,

  HostBedTitle: styled.div`
    color: white;
    font-size: 20px;
  `,

  HostBedCountBox: styled.div`
    ${variables.flex('row', 'space-between', '')};
    color: white;
    width: 80px;
  `,

  Plus: styled.button`
    ${variables.flex('column', 'center', 'center')};
    width: 30px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
  `,

  Minus: styled.button`
    ${variables.flex('column', 'center', 'center')};
    width: 30px;
    height: 25px;
    background-color: white;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
  `,

  Number: styled.input`
    width: 50px;
    color: white;
    background-color: #212121;
    text-align: center;
    border: none;
  `,

  ResultNone: styled.div`
    display: none;
  `,
};
