import React from 'react';
import styled from 'styled-components/macro';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';
import theme from '../../../../styles/theme';
import variables from '../../../../styles/variables';

const Guest = ({
  currentId,
  guestModalIsOpen,
  decreaseGuestNum,
  increaseGuestNum,
  guestNum,
}) => {
  return (
    <S.GuestContainer active={guestModalIsOpen} currentId={currentId}>
      <S.GuestWrapper>
        <S.GuestValueWrapper>
          <S.GuestTitle>
            성인
            <S.GuestAgeGroup>만 13세 이상</S.GuestAgeGroup>
          </S.GuestTitle>
          <S.GuestNumValueGroup>
            <S.GuestNumBtn
              onClick={decreaseGuestNum}
              disabled={guestNum === 0 ? true : false}
            >
              <BsDashLg />
            </S.GuestNumBtn>
            <S.GuestValue>{guestNum}</S.GuestValue>
            <S.GuestNumBtn
              onClick={increaseGuestNum}
              disabled={guestNum > 11 ? true : false}
            >
              <BsPlusLg />
            </S.GuestNumBtn>
          </S.GuestNumValueGroup>
        </S.GuestValueWrapper>
      </S.GuestWrapper>
    </S.GuestContainer>
  );
};

export default Guest;

const S = {
  GuestContainer: styled.div`
    position: absolute;
    top: 120px;
    right: 0;
    width: 400px;
    height: auto;
    border-radius: 24px;
    display: ${({ active, currentId }) =>
      active && currentId === 3 ? 'block' : 'none'};
    background-color: ${theme.colors.white};
    padding: 30px 20px;
    box-shadow: 1px 1px 10px ${theme.colors.transparentBlack2};
  `,

  GuestTitle: styled.div`
    font-size: 14px;
  `,

  GuestAgeGroup: styled.p`
    margin-top: 5px;
    font-size: 12px;
    color: #555;
  `,

  GuestWrapper: styled.div`
    overflow: hidden;
  `,

  GuestValueWrapper: styled.div`
    ${variables.flex('row', 'space-between', 'center')};
  `,

  GuestNumValueGroup: styled.div`
    ${variables.flex('row', 'space-between', 'center')};
  `,

  GuestNumBtn: styled.button`
    ${variables.flex('row', 'flex-start', 'center')};
    background-color: transparent;
    border: 1px solid ${theme.colors.grayScale[0]};
    border-radius: 50%;
    padding: 5px;
    margin: 0 10px;
    color: #888;
    cursor: pointer;
  `,

  GuestValue: styled.div`
    line-height: 26px;
    margin: 0 5px;
  `,
};
