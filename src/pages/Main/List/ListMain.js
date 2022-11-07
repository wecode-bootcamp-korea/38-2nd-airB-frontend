import React, { useEffect, useState } from 'react';
import ListCard from './ListCard';
import styled from 'styled-components';

const ListMain = () => {
  const [houseList, setHouseList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('./data/ListMock.json')
      .then(data => data.json())
      .then(data => {
        setHouseList(data.data);
        setLoading(false);
      });
  }, []);

  if (loading) return;

  return (
    <S.CardWrapper>
      {houseList?.map(data => (
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
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: #eeeeee;
  `,

  CardStandard: styled.div`
    margin: 0px 10px;
  `,
};
