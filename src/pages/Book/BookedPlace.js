import React from 'react';
import styled from 'styled-components/macro';
import { dateToStringForBooking } from 'utils/format';
import variables from '../../styles/variables';

const BookedPlace = ({ bookList }) => {
  return (
    <S.BookListWrapper>
      {bookList &&
        bookList.map(bookInfo => (
          <S.BookListItem key={`${bookInfo.city}${bookInfo.hostName}`}>
            <S.CityImageBox>
              <S.CityImage src={bookInfo.imageUrl} alt={bookInfo.city} />
            </S.CityImageBox>
            <S.ListItemInfoContainer>
              <S.ListItemTitle>{bookInfo.city}</S.ListItemTitle>
              <S.ListItemHostName>
                호스트: {bookInfo.hostName}님
              </S.ListItemHostName>
              <S.ListItemDate>{`${dateToStringForBooking(
                bookInfo.reservation.checkInDate
              )} - ${dateToStringForBooking(
                bookInfo.reservation.checkOutDate
              )}`}</S.ListItemDate>
            </S.ListItemInfoContainer>
          </S.BookListItem>
        ))}
    </S.BookListWrapper>
  );
};

export default BookedPlace;

const S = {
  BookListWrapper: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px 24px;
  `,

  BookListItem: styled.div`
    ${variables.flex('row', 'start', 'start')};
    gap: 10px;
  `,

  CityImageBox: styled.div`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
  `,

  CityImage: styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  ListItemInfoContainer: styled.div`
    font-size: 14px;
    line-height: 20px;
  `,

  ListItemTitle: styled.h4`
    font-weight: 700;
  `,

  ListItemHostName: styled.p`
    color: #555;
  `,

  ListItemDate: styled.div`
    color: #555;
  `,
};
