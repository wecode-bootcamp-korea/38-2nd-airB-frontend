import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import variables from '../../../styles/variables';
import HostStore, { HostContext } from '../User';

const HostPrice = () => {
  const context = useContext(HostContext);
  const { price, setPrice } = context;

  const priceChange = e => {
    typeof price == 'number' ? setPrice(parseInt(e.target.value)) : setPrice(0);
  };

  const upPrice = e =>
    typeof price == 'number' ? setPrice(prev => prev + 10000) : setPrice(0);

  const downPrice = e =>
    price > 0 && typeof price == 'number'
      ? setPrice(prev => prev - 10000)
      : setPrice(0);

  return (
    <HostStore>
      <S.HostPriceBox>
        <S.HostPriceTitie>숙소 가격을 정해주세요.</S.HostPriceTitie>
        <S.HostPriceBoxSize>
          <S.HostPriceMinus onClick={downPrice}>-</S.HostPriceMinus>
          <S.HostPrice value={price} onChange={priceChange} />
          <S.HostPricePlus onClick={upPrice}>+</S.HostPricePlus>
        </S.HostPriceBoxSize>
        <S.HostPriceRange>
          참고로, 이 지역에서 비슷한 숙소의 요금은 ￦
          {parseInt(price * 0.8).toLocaleString()} ~
          {parseInt(price * 1.2).toLocaleString()}
          원입니다.
        </S.HostPriceRange>
      </S.HostPriceBox>
    </HostStore>
  );
};
export default HostPrice;

const S = {
  HostPriceBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    color: white;
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

  HostPrice: styled.input`
    width: 70%;
    height: 80px;
    text-align: center;
    font-size: 30px;
    color: black;
    border-radius: 15px;
  `,

  HostPriceBoxSize: styled.div`
    ${variables.flex()};
    height: 200px;
  `,

  HostPricePlus: styled.button`
    width: 10%;
    height: 35px;
    border-radius: 50%;
    transform: translate(20px);
    cursor: pointer;
  `,

  HostPriceMinus: styled.button`
    width: 10%;
    height: 35px;
    border-radius: 50%;
    transform: translate(-20px);
    cursor: pointer;
  `,

  HostPriceRange: styled.div`
    position: relative;
    width: 350px;
    height: 100px;
    text-align: center;
    font-size: 20px;
    animation-name: motion;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes motion {
      0% {
        bottom: 20px;
      }
      100% {
        bottom: 0px;
      }
    }
  `,

  HostPriceTitie: styled.div`
    ${variables.flex()};
    width: 500px;
    height: 20px;
    font-size: 40px;
  `,

  ResultNone: styled.div`
    display: none;
  `,
};
