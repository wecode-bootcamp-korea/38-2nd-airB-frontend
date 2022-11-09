import React from 'react';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import styled from 'styled-components';

const LocalFilter = () => {
  return (
    <LocalFilterWrapper>
      <FilterButton>
        <InnerText>
          <TbAdjustmentsHorizontal /> <span> 필터</span>
        </InnerText>
      </FilterButton>
    </LocalFilterWrapper>
  );
};

export default LocalFilter;

const LocalFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & :hover {
    cursor: pointer;
  }
`;

const FilterButton = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border: 1px solid #717171;
  outline: none;
  background-color: #f7f7f7;
  padding: 0;
  border-radius: 12px;
  width: 78px;
  height: 48px;
`;

const InnerText = styled.div`
  width: 78px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 14px;
  padding: 0;
`;
