import React, { useState } from 'react';
import { BsXLg, BsHouse } from 'react-icons/bs';
import { BiBuildings } from 'react-icons/bi';
import { FaHotel } from 'react-icons/fa';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';

const FilterModal = ({ valueFilterMain }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const [countbed, setCountbed] = useState(0);
  const [countbedroom, setCountbedroom] = useState(0);
  const [countbathroom, setCountbathroom] = useState(0);
  const [buildingType, setBuildingType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filterFetcher, setFilterFetcher] = useState([]);
  const [buttonToggle, setButtonToggle] = useState(false);
  const [color, setColor] = useState('white');
  const onClick = () => {
    color === 'white' ? setColor('black') : setColor('white');
  };

  const onChange = e => {
    setMinPrice(e.target.value);
  };

  const BuildTypeCheck = num => {
    setBuildingType(num);
  };

  const countBedClick = num => {
    setCountbed(num);
  };

  const countBedRoomClick = num => {
    setCountbedroom(num);
  };

  const countBathRoomClick = num => {
    setCountbathroom(num);
  };

  const countMinPrice = num => {
    setMinPrice(num.target.value);
  };

  const countMaxPrice = num => {
    setMaxPrice(num.target.value);
  };

  const toggleActive = prev => {
    setButtonToggle(prev => !prev);
  };

  const NumberButton = styled.button`
    width: 60px;
    height: 40px;
    border-radius: 30px;
    font-size: 14px;
    margin-right: 10px;
    background-color: ${color};
    outline: none;
    border: 0.5px solid #b0b0b0;
  `;

  const BASE_URL = 'http://10.58.52.94:8000/product/option';

  const formData = {
    themeId: valueFilterMain,
    lowprice: minPrice,
    highprice: maxPrice,
    bed: countbed,
    bathroom: countbathroom,
    bedroom: countbedroom,
    type: buildingType,
  };

  console.log(formData);

  const formData2 = {
    themeId: valueFilterMain,
    lowprice: '',
    highprice: '',
    bed: '',
    bathroom: '',
    bedroom: '',
    type: '',
  };

  const typecheckfunction = () => {
    if (buildingType === 1) {
      return 'APT : 1';
    } else if (buildingType === 2) {
      return 'GH : 2';
    } else if (buildingType === 3) {
      return 'HT : 3';
    }
  };

  const handlePlaceFetcher = () => {
    fetch({ url })
      .then(res => res.json())
      .then(res => setFilterFetcher(res));
  };

  const handleResetFetcher = () => {
    fetch({ resetUrl })
      .then(res => res.json())
      .then(res => setFilterFetcher(res));
  };

  const queryString = Object.entries(formData)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const resetString = Object.entries(formData2).reduce(
    (acc, [key, value]) => `${acc}${key}=${value}&`,
    ''
  );

  const resetUrl = BASE_URL + '?' + resetString;

  const url = BASE_URL + '?' + queryString;

  const numberMapping = Array(8)
    .fill()
    .map((_, i) => i + 1);

  return (
    <div>
      <S.LocalFilterWrapper>
        <S.FilterButton onClick={toggleModal}>
          <S.InnerText>
            <TbAdjustmentsHorizontal />
            필터
          </S.InnerText>
        </S.FilterButton>
      </S.LocalFilterWrapper>

      {modal && (
        <S.ModalWrapper>
          <S.Modaloverlay onClick={toggleModal} />
          <S.ModalContent>
            <S.UpperComponentWrapper>
              <S.CloseButton onClick={toggleModal}>
                <BsXLg />
              </S.CloseButton>
              <S.ModalTitle>필터</S.ModalTitle>
              <S.HiddenDiv />
            </S.UpperComponentWrapper>
            <S.ModalInnerText>
              <S.SubTitle>가격 범위</S.SubTitle>
              <S.PriceInfo> 평균 1박 요금은 ₩140,000입니다</S.PriceInfo>
              <S.CommonWrapper>
                <S.AllPrice>
                  <S.PriceOutline>
                    <S.PriceMinMax>최저 요금</S.PriceMinMax>
                    <S.PriceTag>
                      <S.WonSymbol>₩</S.WonSymbol>
                      <S.PriceFilter
                        type="number"
                        inputmode="numeric"
                        onChange={num => countMinPrice(num)}
                        name="lowprice"
                        value={minPrice}
                      />
                    </S.PriceTag>
                  </S.PriceOutline>
                  <p> - </p>
                  <S.PriceOutline>
                    <S.PriceMinMax>최고 요금</S.PriceMinMax>
                    <S.PriceTag>
                      <S.WonSymbol>₩</S.WonSymbol>
                      <S.PriceFilter
                        type="number"
                        inputmode="numeric"
                        onChange={num => countMaxPrice(num)}
                        name="highprice"
                      />
                    </S.PriceTag>
                  </S.PriceOutline>
                </S.AllPrice>
              </S.CommonWrapper>
              <S.CommonWrapper>
                <S.SubTitle>숙소 유형</S.SubTitle>
                <form>
                  <S.CheckBoxWrapper>
                    <S.CheckBox type="checkbox" />
                    <div>
                      <S.RoomType>집전체</S.RoomType>
                      <S.RoomDescription>
                        단독으로 사용하는 공간 전체
                      </S.RoomDescription>
                    </div>
                  </S.CheckBoxWrapper>
                  <S.CheckBoxWrapper>
                    <S.CheckBox type="checkbox" />
                    <div>
                      <S.RoomType>개인실</S.RoomType>
                      <S.RoomDescription>
                        집 또는 호텔의 개인실과 일부 공용 공간
                      </S.RoomDescription>
                    </div>
                  </S.CheckBoxWrapper>
                  <S.CheckBoxWrapper>
                    <S.CheckBox type="checkbox" />
                    <div>
                      <S.RoomType>다인실</S.RoomType>
                      <S.RoomDescription>
                        다른 사람들과 함께 사용하는 다인실 및 공용 공간
                      </S.RoomDescription>
                    </div>
                  </S.CheckBoxWrapper>
                </form>
              </S.CommonWrapper>
              <S.CommonWrapper>
                <S.SubTitle>침실과 침대</S.SubTitle>
                <S.BedAndBath>침실</S.BedAndBath>
                <S.ButtonCluster>
                  {numberMapping.map(num => (
                    <S.NumberButton
                      primary={countbedroom === `${num}`}
                      key={num}
                      onClick={() => {
                        console.log(countbedroom);
                        countBedRoomClick(num);
                      }}
                      name="bedroom"
                    >
                      {num}
                    </S.NumberButton>
                  ))}
                </S.ButtonCluster>
                <S.BedAndBath>침대</S.BedAndBath>
                <S.ButtonCluster>
                  {Array(8)
                    .fill()
                    .map((_, i) => i + 1)
                    .map(quantity => (
                      <NumberButton
                        white
                        key={quantity}
                        value={quantity}
                        onClick={() => {
                          countBedClick(quantity);
                          toggleActive();
                        }}
                        name="bed"
                      >
                        {quantity}
                      </NumberButton>
                    ))}
                </S.ButtonCluster>
                <S.BedAndBath>욕실</S.BedAndBath>
                <S.ButtonCluster>
                  {Array(8)
                    .fill()
                    .map((_, i) => i + 1)
                    .map(quantity => (
                      <S.NumberButton
                        key={quantity}
                        value={quantity}
                        onClick={() => countBathRoomClick(quantity)}
                        name="bathroom"
                      >
                        {quantity}
                      </S.NumberButton>
                    ))}
                </S.ButtonCluster>
              </S.CommonWrapper>
              <S.CommonWrapper>
                <S.SubTitle>건물 유형</S.SubTitle>
                {HOUSETYPE.map(el => (
                  <S.HouseTypeButton
                    key={el.id}
                    onClick={() => BuildTypeCheck(el.id)}
                    name="housetype"
                    value={el.id}
                  >
                    <S.TypeInnerContentWrapper>
                      <S.TypeInnerIcon>
                        <el.icon />
                      </S.TypeInnerIcon>
                      <S.TypeInnerText>{el.name}</S.TypeInnerText>
                    </S.TypeInnerContentWrapper>
                  </S.HouseTypeButton>
                ))}
              </S.CommonWrapper>
              <S.CommonWrapper>
                <S.SubTitle>편의시설</S.SubTitle>
              </S.CommonWrapper>
              <S.CommonWrapper>
                <S.SubTitle>예약옵션</S.SubTitle>
              </S.CommonWrapper>
            </S.ModalInnerText>
            <S.LowerComponentWrapper>
              <S.RemoveAll onClick={handleResetFetcher}>전체 해제</S.RemoveAll>
              <S.CountAccomodation onClick={handlePlaceFetcher}>
                숙소 개 표시
              </S.CountAccomodation>
            </S.LowerComponentWrapper>{' '}
          </S.ModalContent>
        </S.ModalWrapper>
      )}
    </div>
  );
};

export default FilterModal;

const S = {
  LocalFilterWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    & :hover {
      cursor: pointer;
    }
  `,

  FilterButton: styled.button`
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
    margin-top: 20px;
  `,

  InnerText: styled.div`
    width: 78px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 14px;
    padding: 0;
  `,

  ThemeFilterOutline: styled.div`
    display: flex;
    justify-content: center;
    padding: 0 80px;
  `,

  ModalWrapper: styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 10;
  `,

  Modaloverlay: styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
  `,

  CloseButton: styled.button`
    border: none;
    outline: none;
    background-color: white;
    font-size: 14px;
    font-weight: bolder;
    margin: 20px 0 20px 20px;
  `,

  ModalTitle: styled.span`
    font-size: 14px;
    font-weight: bolder;
    margin: 20px 40px 20px 0;
  `,

  HiddenDiv: styled.span`
    margin: 20px 20px 20px 0;
  `,

  ModalContent: styled.div`
    border-radius: 10px;
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 780px;
    height: 80%;
    border: 1px solid gray;
    overflow: hidden;
    opacity: 1;
    background-color: white;
  `,

  UpperComponentWrapper: styled.div`
    position: static;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ebebeb;
    top: 0;
    width: 100%;
    z-index: 100;
    height: 64px; ;
  `,

  LowerComponentWrapper: styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #ebebeb;
    bottom: 0;
    width: 100%;
    height: 81px;
  `,

  RemoveAll: styled.span`
    margin: 25px 0 10px 20px;
    text-decoration: underline;
    font-size: 16px;
  `,

  CountAccomodation: styled.button`
    margin: 10px 20px 15px 0;
    outline: none;
    border: none;
    border-radius: 10px;
    width: 152px;
    height: 48px;
    color: white;
    background-color: black;
    font-size: 16px;
  `,

  ModalInnerText: styled.div`
    margin: 0 20px;
    z-index: 100;
    width: 98%;
    height: 64vh;
    overflow: scroll;
    padding: 0;
  `,

  SubTitle: styled.p`
    font-size: 22px;
    margin: 30px 0;
  `,

  PriceInfo: styled.p`
    font-size: 14px;
    color: #7e7e7e;
  `,

  CommonWrapper: styled.div`
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 20px;
  `,

  AllPrice: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,

  PriceOutline: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid #b0b0b0;
    border-radius: 5px;
    width: 305px;
    height: 53px;
    margin: 20px 10px;
  `,

  PriceMinMax: styled.div`
    font-size: 12px;
    color: #b0b0b0;
    padding: 10px 0 0 10px;
  `,

  PriceTag: styled.div`
    display: flex;
    flex-direction: row;
  `,

  WonSymbol: styled.span`
    font-size: 16px;
    padding: 5px 10px;
  `,

  PriceFilter: styled.input`
    width: 260px;
    height: 20px;
    font-size: 16px;
    border: none;
    outline: none;
  `,

  CheckBoxWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,

  CheckBox: styled.input`
    height: 24px;
    width: 24px;
  `,

  RoomType: styled.div`
    font-size: 16px;
    padding: 2px 0 0 15px;
  `,
  RoomDescription: styled.div`
    font-size: 14px;
    color: #b0b0b0;
    padding: 10px 0 20px 15px;
  `,

  BedAndBath: styled.div`
    font-size: 16px;
    padding: 20px 0 30px 0;
  `,

  ButtonCluster: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `,

  NumberButton: styled.button`
    width: 60px;
    height: 40px;
    border-radius: 30px;
    font-size: 14px;
    margin-right: 10px;
    background-color: ${props => (props.white ? 'black' : 'white')};
    outline: none;
    border: 0.5px solid #b0b0b0;
  `,

  HouseTypeWrapper: styled.div`
    display: flex;
    margin-left: 10px;
  `,

  HouseTypeButton: styled.button`
    width: 162px;
    height: 128px;
    border-radius: 10px;
    border: 1px solid #ebebeb;
    outline: none;
    background-color: white;
    margin-right: 20px;
  `,

  TypeInnerContentWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 16px;
  `,

  TypeInnerIcon: styled.div`
    font-size: 32px;
  `,

  TypeInnerText: styled.div`
    font-size: 16px;
  `,
};

const HOUSETYPE = [
  { id: 1, name: '아파트', icon: BiBuildings },
  { id: 2, name: '게스트용 별채', icon: BsHouse },
  { id: 3, name: '호텔', icon: FaHotel },
];