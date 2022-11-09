import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components/macro';
import theme from '../../styles/theme';
import BookedPlace from './BookedPlace';
import Empty from './Empty';

const Book = () => {
  const [bookList, setBookList] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    fetch(`http://10.58.52.51:3000/reservation/user/${userId}`)
      .then(res => res.json())
      .then(data => {
        setBookList(data.data);
      });
  }, []);

  return (
    <S.BookLayout>
      <S.BookHeaderContainer>
        <S.BookTitle>여행</S.BookTitle>
      </S.BookHeaderContainer>
      <S.BookListContainer>
        <S.BookListHeaderContainer>
          <h3>예약된 여행지</h3>
        </S.BookListHeaderContainer>
        <S.BookListBox>
          {bookList && (bookList || bookList.length !== 0) ? (
            <BookedPlace bookList={bookList} />
          ) : (
            <Empty />
          )}
        </S.BookListBox>
      </S.BookListContainer>
    </S.BookLayout>
  );
};

export default Book;

const S = {
  BookLayout: styled.div`
    width: 1400px;
    margin: 0 auto;
    padding: 120px 30px 80px 30px;
  `,

  BookHeaderContainer: styled.div`
    padding-bottom: 30px;
  `,

  BookTitle: styled.h2`
    font-size: 24px;
  `,

  BookListContainer: styled.div``,

  BookListHeaderContainer: styled.div`
    margin-bottom: 30px;
  `,

  BookListHeader: styled.h3`
    margin-bottom: 20px;
  `,

  BookListBox: styled.div`
    border: 1px solid ${theme.colors.grayScale[0]};
    border-radius: 24px;
    padding: 40px 20px;
  `,
};
