import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainContext } from '../MainText';
import ListCard from './ListCard';
import Skeleton from './Skeleton';

const ListMain = () => {
  const [houseList, setHouseList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('./data/ListMock.json')
      .then(data => data.json())
      .then(data => {
        setHouseList(data.data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <S.CardWrapper>
        <Skeleton width="316px" height="400px" number={20} />{' '}
      </S.CardWrapper>
    );
  return (
    <S.CardWrapper>
      {houseList.map(data => (
        <S.CardStandard>
          <ListCard key={data.id} data={data} />
        </S.CardStandard>
      ))}
    </S.CardWrapper>
  );
};

export default ListMain;

const S = {
  CardWrapper: styled.div`
    display: flex;
    padding: 0 40px;
    width: 100%;
    flex-wrap: wrap;
    background-color: #eeeeee;
  `,

  CardStandard: styled.div`
    margin: 0px 20px;
    display: flex;
    flex-direction: row;
  `,
};
