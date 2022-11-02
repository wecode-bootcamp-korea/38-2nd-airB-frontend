import React from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { createGlobalStyle } from 'styled-components/macro';
import styled from 'styled-components';
import leftArrow from '../../../../assets/icons/left-arrow.png';
import rightArrow from '../../../../assets/icons/right-arrow.png';
import variables from '../../../../styles/variables';
import theme from '../../../../styles/theme';

const Calendar = ({
  currentId,
  dateModalIsOpen,
  onChange,
  startDate,
  endDate,
}) => {
  return (
    <S.DateModalContainer active={dateModalIsOpen} currentId={currentId}>
      <S.DateModal>
        <DatePicker
          locale={ko}
          selected={startDate}
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          onChange={onChange}
          disabledKeyboardNavigation
          dateFormat="yyyy년 MM월 dd일"
          selectsRange
          isClearable
          monthsShown={2}
          inline
          wrapperClassName="react-datepicker__header react-datepicker__day"
        />
        <DatePickerWrapperStyles />
      </S.DateModal>
    </S.DateModalContainer>
  );
};

export default Calendar;

const S = {
  DateModalContainer: styled.div`
    position: absolute;
    display: ${({ active, currentId }) =>
      active && currentId === 2 ? 'block' : 'none'};
    top: 120px;
    left: 0;
    right: 0;
    border-radius: 24px;
    background-color: ${theme.colors.white};
    padding: 30px 10px;
    box-shadow: 1px 1px 10px ${theme.colors.transparentBlack2};
  `,

  DateModal: styled.div`
    position: relative;
  `,
};

const DatePickerWrapperStyles = createGlobalStyle`
.react-datepicker {
  ${variables.flex('center', 'center', 'baseline')}
  position: relative;
  width: 760px;
  border: none;
  margin: 0 auto;
}

.react-datepicker__header  {
  background-color: ${theme.colors.white};
  border: none;
}

.react-datepicker__day-name,
.react-datepicker__day,
.react-datepicker__time-name {
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  text-align: center;
  vertical-align: middle;
  margin: 0.166rem;
}

.react-datepicker__day-name {
  color: rgba(0,0,0,0.5);
}

.react-datepicker__current-month {
  font-size: 15px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
}

.react-datepicker__month-container {
  margin: 0 27px;
}

// 버튼
.react-datepicker__navigation {
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
  border-radius: 100%; 
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }
}

.react-datepicker__navigation--previous {
  position: absolute;
  left: 58px;
  top: 10px;
  background-image: url(${rightArrow});
  background-size: 24px 24px;
  background-position: center center;
  background-repeat: no-repeat;
}


.react-datepicker__navigation--next {
  position: absolute;
  right: 58px;
  top: 10px;
  background-image: url(${leftArrow});
  background-size: 24px 24px;
  background-position: center center;
  background-repeat: no-repeat;
}

.react-datepicker__navigation-icon  {
  visibility: hidden;
}

.react-datepicker__year-read-view--down-arrow,
.react-datepicker__month-read-view--down-arrow,
.react-datepicker__month-year-read-view--down-arrow, .react-datepicker__navigation-icon::before {
  width: 6px;
  height: 6px;
  border-width: 1px 1px 0 0;
  border-color: ${theme.colors.black};
}

.react-datepicker__day:hover,
.react-datepicker__month-text:hover,
.react-datepicker__quarter-text:hover,
.react-datepicker__year-text:hover {
  border-radius: 50%;
  background-color: #f0f0f0;
  cursor: pointer;
}

.react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range,
.react-datepicker__month-text--selected,
.react-datepicker__month-text--in-selecting-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--selected,
.react-datepicker__quarter-text--in-selecting-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--selected,
.react-datepicker__year-text--in-selecting-range,
.react-datepicker__year-text--in-range {
  border-radius: 50%;
  background-color: rgba(0,0,0,0.1);
  color: ${theme.colors.black};
}

.react-datepicker__day--selected:hover, .react-datepicker__day--in-selecting-range:hover, .react-datepicker__day--in-range:hover,
.react-datepicker__month-text--selected:hover,
.react-datepicker__month-text--in-selecting-range:hover,
.react-datepicker__month-text--in-range:hover,
.react-datepicker__quarter-text--selected:hover,
.react-datepicker__quarter-text--in-selecting-range:hover,
.react-datepicker__quarter-text--in-range:hover,
.react-datepicker__year-text--selected:hover,
.react-datepicker__year-text--in-selecting-range:hover,
.react-datepicker__year-text--in-range:hover {
  border-radius: 50%;
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
}

.react-datepicker__day--keyboard-selected,
.react-datepicker__month-text--keyboard-selected,
.react-datepicker__quarter-text--keyboard-selected,
.react-datepicker__year-text--keyboard-selected {
  border-radius: 0.3rem;
  background-color: rgba(0,0,0,0.1);
  color: ${theme.colors.black};
}

.react-datepicker__day--keyboard-selected:hover,
.react-datepicker__month-text--keyboard-selected:hover,
.react-datepicker__quarter-text--keyboard-selected:hover,
.react-datepicker__year-text--keyboard-selected:hover {
  border-radius: 50%;
  background-color: rgba(0,0,0,0.1);
}

.react-datepicker__day--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range),
.react-datepicker__month-text--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range),
.react-datepicker__quarter-text--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range),
.react-datepicker__year-text--in-selecting-range:not(.react-datepicker__day--in-range,
.react-datepicker__month-text--in-range,
.react-datepicker__quarter-text--in-range,
.react-datepicker__year-text--in-range) {
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
}

.react-datepicker__input-container {
  position: relative;
  display: inline-block;
  width: 100%;
  input {
    width: 59px;
    border: none;
    background-color: ${theme.colors.white};
    color: rgba(0,0,0,0.5);
    font-size: 14px;
    font-weight: 400;
  }
}

.react-datepicker__day--outside-month,
.react-datepicker__day--outside-month:hover
{
  background-color: ${theme.colors.white};
}

`;
