import React, { createContext, useState } from 'react';

export const ListContext = createContext();
// createContext()로 비어 있는 context가 만들어진다.

function ListStore(props) {
  // props로 지정하고 싶은 상태를 만들어 준다.

  const [countbed, setCountbed] = useState(0);
  const [countbedroom, setCountbedroom] = useState(0);
  const [countbathroom, setCountbathroom] = useState(0);
  const [buildingType, setBuildingType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filterFetcher, setFilterFetcher] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [valueFilterMain, setValueFilterMain] = useState('');
  const [valueTheme, setValueTheme] = useState('');
  const [houseList, setHouseList] = useState([]);
  const [filterTheme, setFilterTheme] = useState('');
  const BASE_URL = 'http://10.58.52.73:8000/product/option';

  const formData = {
    themeId: filterValue,
    lowprice: minPrice,
    highprice: maxPrice,
    bed: countbed,
    bathroom: countbathroom,
    bedroom: countbedroom,
    apartmentType: buildingType.apartmentType,
    guestHouseType: buildingType.guesthouseType,
    hotelType: buildingType.hotelType,
  };

  const queryString = Object.entries(formData)
    .filter(([key, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const url = BASE_URL + '?' + queryString;

  const fetchThemeFilter = () => {
    fetch(url)
      .then(res => res)
      .then(data => setFilterTheme(data));
  };

  const handlePlaceFetcher = () => {
    fetch(url)
      .then(res => res.json())
      .then(res => setFilterFetcher(res));
  };

  const formData2 = {
    themeId: '',
    lowprice: '',
    highprice: '',
    bed: '',
    bathroom: '',
    bedroom: '',
    type: '',
  };

  const handleResetFetcher = () => {
    fetch(resetUrl)
      .then(res => res.json())
      .then(res => setFilterValue(res));
  };

  const resetString = Object.entries(formData2)
    .filter(([key, value]) => Boolean(value))
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const resetUrl = BASE_URL + '?' + resetString;

  return (
    //value를 통해 전달하고 싶은 값을 넣어준다.
    <ListContext.Provider
      value={{
        countbed,
        setCountbed,
        countbedroom,
        setCountbedroom,
        countbathroom,
        setCountbathroom,
        buildingType,
        setBuildingType,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        filterFetcher,
        setFilterFetcher,
        filterValue,
        setFilterValue,
        valueFilterMain,
        setValueFilterMain,
        valueTheme,
        setValueTheme,
        houseList,
        setHouseList,
        filterTheme,
        setFilterTheme,
        fetchThemeFilter,
        queryString,
        url,
        BASE_URL,
        formData,
        handlePlaceFetcher,
        formData2,
        resetString,
        resetUrl,
      }}
    >
      {props.children}
    </ListContext.Provider>
  );
}
export default ListStore;
