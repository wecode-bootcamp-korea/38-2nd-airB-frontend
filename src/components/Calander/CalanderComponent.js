import { React, useState, useEffect } from 'react';
import { addDays, subDays } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import 'react-datepicker/dist/react-datepicker.css';
import theme from '../../styles/theme';

const CalanderComponent = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(addDays(new Date(), 4));
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [buttonBoolean, setButtonBoolean] = useState(false);
  const [reservedNight, setReservedNight] = useState(0);
  const navigate = useNavigate();
  let resStartDate = startDate.toISOString().split('T');
  let resEndDate = endDate.toISOString().split('T');
  let betweenResDate = [];
  const isUserId = localStorage.getItem('userId');

  const {
    makeInputToPriceFormat,
    getDateRange,
    productId,
    price,
    guestMax,
    excludeDateArray,
  } = props;

  const onClickAndPostDataToBackend = () => {
    savingResData();
    sendData();
  };

  const savingResData = () => {
    getDateRange(resStartDate, resEndDate, betweenResDate);
    if (
      betweenResDate.length >
      findUniqElem(betweenResDate, excludeDateArray).length
    ) {
      alert(
        `${resStartDate} ~ ${resEndDate} 사이에 이미 예약된 날짜가 있어 예약이 불가능합니다.`
      );
      setReservedNight(0);
    } else {
      alert(`${resStartDate} ~ ${resEndDate} 예약성공`);
      setReservedNight(betweenResDate.length - 1);
    }
  };

  const excludeDateArrayFunc = excludeDateArray.map(date => {
    return addDays(new Date(date), 0);
  });

  const findUniqElem = (arr1, arr2) =>
    [...arr1, ...arr2].filter(item => !arr2.includes(item));
  const totalPrice = price * reservedNight;

  const startDateChangeClick = date => {
    setStartDate(date);
  };
  const endDateChangeClick = date => {
    setEndDate(date);
  };

  useEffect(() => {
    resStartDate = startDate.toISOString().split('T')[0];
    resEndDate = endDate.toISOString().split('T')[0];
    console.log(resStartDate);
    console.log(resEndDate);
    betweenResDate = [];
    getDateRange(resStartDate, resEndDate, betweenResDate);
    setReservedNight(betweenResDate.length - 1);

    if (resStartDate > resEndDate) {
      setReservedNight('0');
    }
  }, [startDate, endDate]);

  const sendData = () => {
    fetch(`http://10.58.52.51:3000/reservation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        productId: `${productId}`,
        checkIn: `${resStartDate}`,
        checkOut: `${resEndDate}`,
        guestCount: `${numberOfGuests}`,
      }),
    }).then(res => {
      if (res.ok) {
      }
    });
  };

  const MinusGuestsNumber = () => {
    setNumberOfGuests(numberOfGuests - 1);
  };
  const PlusGuestsNumber = () => {
    setNumberOfGuests(numberOfGuests + 1);
  };

  const checkGuestNumber = () => {
    if (numberOfGuests > 1) {
      setButtonBoolean(false);
    } else {
      setButtonBoolean(true);
    }
  };

  const minusGuestsNumberClick = () => {
    MinusGuestsNumber();
    checkGuestNumber();
  };
  const plusGuestsNumberClick = () => {
    PlusGuestsNumber();
    checkGuestNumber();
  };

  useEffect(() => {
    checkGuestNumber();
  }, [numberOfGuests]);

  return (
    <S.CalanderAndPeopleNumberCheckContainer>
      <S.CheckInAndOutContainer>
        <S.CheckinSelectBox>
          <strong>체크인</strong>
          <S.StyledDatePicker
            selected={startDate}
            onChange={date => startDateChangeClick(date)}
            selectsStart
            dateFormat="yyyy-MM-dd"
            startDate={startDate}
            minDate={new Date()}
            endDate={endDate}
            locale={ko}
            maxDate={addDays(startDate, 100)}
            excludeDates={excludeDateArrayFunc}
            withPortal
            todayButton="오늘 날짜로"
            value
            includeDateIntervals={[
              {
                start: subDays(startDate, 10000),
                end: addDays(endDate, 10000),
              },
            ]}
          />
        </S.CheckinSelectBox>
        <S.CheckoutSelectBox>
          <strong>체크아웃</strong>
          <S.StyledDatePicker
            selected={endDate}
            onChange={date => {
              endDateChangeClick(date);
            }}
            selectsEnd
            dateFormat="yyyy-MM-dd"
            startDate={startDate}
            endDate={endDate}
            excludeDates={excludeDateArrayFunc}
            minDate={addDays(startDate, 1)}
            maxDate={addDays(startDate, 100)}
            locale={ko}
            todayButton="오늘 날짜로"
            withPortal
          />
        </S.CheckoutSelectBox>
      </S.CheckInAndOutContainer>
      <S.SelectNumberOfPeople>
        <S.GuestNumberBoxTitle>
          인원 (최대 수용 인원 : {guestMax} 명)
        </S.GuestNumberBoxTitle>
        <S.SelectGuestNumberButtonZone>
          <S.NumberChangeButton
            onClick={minusGuestsNumberClick}
            disabled={buttonBoolean}
          >
            -
          </S.NumberChangeButton>
          <div>{numberOfGuests}명</div>
          <S.NumberChangeButton onClick={plusGuestsNumberClick}>
            +
          </S.NumberChangeButton>
        </S.SelectGuestNumberButtonZone>
      </S.SelectNumberOfPeople>
      <S.ReservationButton onClick={onClickAndPostDataToBackend}>
        예약하기
      </S.ReservationButton>
      <S.ReservationGuidingMent>
        예약 확정 전에는 요금이 청구되지 않습니다.
      </S.ReservationGuidingMent>
      <S.ComputingArea>
        <S.PriceForNight>
          <S.InfoForprice>
            ₩ {makeInputToPriceFormat(price)}원 x {reservedNight}박
          </S.InfoForprice>
          <S.ComputedPrice>
            {makeInputToPriceFormat(totalPrice)}원
          </S.ComputedPrice>
        </S.PriceForNight>
        <S.PriceForService>
          <S.InfoForprice>서비스 수수료</S.InfoForprice>
          <S.ComputedPrice>0원</S.ComputedPrice>
        </S.PriceForService>
      </S.ComputingArea>
      <S.TotalPriceArea>
        <S.TotalPriceText>총 합계</S.TotalPriceText>
        <S.TotalPriceText>
          {makeInputToPriceFormat(totalPrice)}원
        </S.TotalPriceText>
      </S.TotalPriceArea>
      <S.ReportHostelTextContainer>
        ❗️숙소 신고하기❗️
      </S.ReportHostelTextContainer>
    </S.CalanderAndPeopleNumberCheckContainer>
  );
};
export default CalanderComponent;

const S = {
  CalanderBoxContainer: styled.div`
    display: flex;
    border: red 1px solid;
  `,

  StyledDatePicker: styled(DatePicker)`
    border: 1px solid #e0e0e0;
    padding: 5px 10px;
    margin-top: 6px;
    font-size: 20px;
    width: 100%;
    cursor: pointer;
    background-color: white;
  `,

  CalanderAndPeopleNumberCheckContainer: styled.div``,

  CheckInAndOutContainer: styled.div`
    display: flex;
  `,
  CheckinSelectBox: styled.div`
    width: 50%;
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range {
      background-color: ${theme.colors.blue};
    }
    .react-datepicker__day--excluded,
    .react-datepicker__day--disabled {
      background-color: white;
      color: grey;
    }
  `,
  CheckoutSelectBox: styled.div`
    width: 50%;
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range {
      background-color: ${theme.colors.blue};
    }
    .react-datepicker__day--excluded,
    .react-datepicker__day--disabled {
      background-color: white;
      color: grey;
    }
  `,

  SelectNumberOfPeople: styled.div`
    margin-top: 10px;
  `,
  GuestNumberBoxTitle: styled.div``,
  SelectGuestNumberButtonZone: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;
  `,
  NumberChangeButton: styled.button`
    border: 1px solid #e0e0e0;
    background-color: white;
    width: 50px;
    height: 50px;
    font-size: 30px;
    border-radius: 100%;
    font-weight: 300;
    &:disabled {
      color: white;
      cursor: default;
    }
    cursor: pointer;
  `,
  ReservationButton: styled.button`
    outline: 0;
    border: none;
    border-radius: 6px;
    background-color: ${theme.colors.blue};
    width: 100%;
    color: white;
    font-size: 17px;
    padding: 20px 0px;
    cursor: pointer;
    margin: 10px 0px;
  `,

  ReservationGuidingMent: styled.div`
    width: 100%;
    font-size: 13px;
    text-align: center;
  `,

  ComputingArea: styled.div`
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 10px;
  `,

  PriceForNight: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0px;
    margin: 10px 0px;
  `,
  PriceForService: styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0px;
    margin: 10px 0px;
  `,
  InfoForprice: styled.div`
    font-size: 15px;
    font-weight: 200;
    text-decoration: underline;
    cursor: pointer;
  `,
  ComputedPrice: styled.div`
    font-weight: 800;
  `,
  TotalPriceArea: styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 15px;
    padding-bottom: 30px;
  `,
  TotalPriceText: styled.div`
    font-weight: 800;
    font-size: 20px;
  `,
  Text: styled.div``,

  ReportHostelTextContainer: styled.div`
    cursor: pointer;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    font-size: 14px;
    text-decoration: underline;
    color: ${theme.colors.lightGrey};
  `,
};
