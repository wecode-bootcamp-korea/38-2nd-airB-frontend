import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';
import ListCard from './ListCard';

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
    <S.CardCenter>
      <S.CardWrapper>
        {houseList?.map(data => (
          <S.CardStandard>
            <ListCard key={data.id} data={data} />
          </S.CardStandard>
        ))}
      </S.CardWrapper>
    </S.CardCenter>
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
  `,

  CardStandard: styled.div`
    margin: 0px 10px;
  `,
};
