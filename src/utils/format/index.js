export const dateToStringForBooking = date => {
  const [year, month, day] = date.split('-');
  return `${year}년 ${month}월 ${day}일`;
};

export const dateToStringFormat = date => {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} `;
};

export const dateToString = date => {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
};
