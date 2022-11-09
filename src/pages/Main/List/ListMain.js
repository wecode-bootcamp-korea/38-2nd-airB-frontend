import React, { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';
import { AmenityFilterContext } from '../AmenityFilterContext';
import ListCard from './ListCard';
import Skeleton from './Skeleton';

const ListMain = () => {
  const { search: queryString } = useLocation();
  console.log('location: ', queryString);

  const [loading, setLoading] = useState(true);
  const context = useContext(AmenityFilterContext);
  const { houseList, setHouseList, filterFetcher, url } = context;

  useEffect(() => {
    fetch(`http://10.58.52.51:3000/product/option${queryString}`)
      .then(data => data.json())
      .then(data => {
        setHouseList(data.data);
        setLoading(false);
      });
  }, [queryString]);

  if (loading)
    return (
      <S.CardWrapper>
        <Skeleton width="276px" height="295px" number={20} />
      </S.CardWrapper>
    );
  return (
    <S.CardWrapper>
      {filterFetcher
        ? filterFetcher.data?.map(data => (
            <S.CardStandard key={data.id}>
              <ListCard key={data.id} data={data} />
            </S.CardStandard>
          ))
        : houseList?.map(data => (
            <S.CardStandard key={data.id}>
              <ListCard key={data.id} data={data} />
            </S.CardStandard>
          ))}
    </S.CardWrapper>
  );
};

export default ListMain;

const S = {
  CardCenter: styled.div`
    ${variables.flex()}
  `,

  CardWrapper: styled.div`
    display: flex;
    padding: 0 40px;
    width: 1500px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 40px auto 80px auto;
  `,

  CardStandard: styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px 10px;
  `,
};
