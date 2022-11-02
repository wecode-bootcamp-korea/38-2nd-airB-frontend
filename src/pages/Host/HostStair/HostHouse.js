import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';
import HostStore, { HostContext } from '../User';

const HostHouse = () => {
  const click = props => {
    setWhere(props);
  };

  const context = useContext(HostContext);
  const { where, setWhere } = context;

  return (
    <HostStore>
      <S.HostQuestionBox>
        <S.HostHouseQuestion
          type="radio"
          one={where}
          onClick={apart => click(1)}
        >
          아파트
        </S.HostHouseQuestion>
        <S.HostHouseQuestion
          type="radio"
          two={where}
          onClick={villa => click(2)}
        >
          게스트용 별채
        </S.HostHouseQuestion>
        <S.HostHouseQuestion
          type="radio"
          three={where}
          onClick={hotel => click(3)}
        >
          호텔
        </S.HostHouseQuestion>
      </S.HostQuestionBox>
    </HostStore>
  );
};
export default HostHouse;
const S = {
  HostQuestionBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    height: 78%;
    animation-name: fadeOut;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  HostHouseQuestion: styled.button`
    width: 60%;
    height: 80px;
    border-radius: 15px;
    margin-top: 10px;
    cursor: pointer;
    background-color: ${props => (props.one === 1 ? '#4b89dc' : null)};
    background-color: ${props => (props.two === 2 ? '#4b89dc' : null)};
    background-color: ${props => (props.three === 3 ? '#4b89dc' : null)};
  `,

  ResultNone: styled.div`
    display: none;
  `,
};
