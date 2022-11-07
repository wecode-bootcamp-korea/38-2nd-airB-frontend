import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import variables from '../../styles/variables';
import theme from '../../styles/theme';

const Empty = () => {
  return (
    <S.EmptyContainer>
      <S.EmptyMsg>예약된 여행지가 없습니다.</S.EmptyMsg>
      <S.SubMsg>
        여행가방에 쌓인 먼지를 털어내고 다음 여행 계획을 세워보세요.
      </S.SubMsg>
      <S.BookLink>
        <Link to="/">예약하러 가기</Link>
      </S.BookLink>
    </S.EmptyContainer>
  );
};

export default Empty;

const S = {
  EmptyContainer: styled.div`
    ${variables.flex('column', 'center', 'center')};
    padding: 100px 0;
  `,

  EmptyMsg: styled.div`
    margin-bottom: 10px;
  `,

  SubMsg: styled.p`
    color: ${theme.colors.grayScale[2]};
    font-size: 14px;
  `,

  BookLink: styled.div`
    a {
      display: block;
      padding: 20px;
      color: white;
      text-decoration: none;
      cursor: pointer;
      background-color: ${theme.colors.skyblue};
      border-radius: 16px;
      margin-top: 30px;
      transition: 0.3s;

      &:hover {
        background-color: ${theme.colors.black};
        color: ${theme.colors.white};
      }
    }
  `,
};
