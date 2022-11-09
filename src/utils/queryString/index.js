export const queryObj = {
  city: '',
  themeId: '',
  lowprice: '',
  highprice: '',
  bed: '',
  bathroom: '',
  bedroom: '',
  APT: '',
  GH: '',
  HT: '',
  guest: '',
  checkInDate: '',
  checkOutDate: '',
};

export const convertQueryObjToString = queryObj => {
  const queryString = Object.entries(queryObj)
    .filter(([key, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `?${queryString}`;
};
