import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { ListContext } from '../AmenityFilterContext';
import ListCard from './ListCard';
import Skeleton from './Skeleton';

const ListMain = () => {
  const [loading, setLoading] = useState(true);
  const context = useContext(ListContext);
  const { houseList, setHouseList, filterFetcher, url } = context;

  useEffect(() => {
    fetch(url)
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
      {filterFetcher !== null
        ? filterFetcher.data?.map(data => (
            <S.CardStandard>
              <ListCard key={data.id} data={data} />
            </S.CardStandard>
          ))
        : houseList?.map(data => (
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
