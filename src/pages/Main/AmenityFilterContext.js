import React, { createContext, useState } from 'react';
import { TbChevronsDownLeft } from 'react-icons/tb';
import { useLocation, useNavigate } from 'react-router-dom';
export const AmenityFilterContext = createContext();

function AmenityFilterStore(props) {
  const { search } = window.location;
  const [countbed, setCountbed] = useState(0);
  const [countbedroom, setCountbedroom] = useState(0);
  const [countbathroom, setCountbathroom] = useState(0);
  const [buildingType, setBuildingType] = useState({
    apartmentType: '',
    guesthouseType: '',
    hotelType: '',
  });
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filterFetcher, setFilterFetcher] = useState(null);
  const [filterValue, setFilterValue] = useState(null);
  const [valueFilterMain, setValueFilterMain] = useState('');
  const [valueTheme, setValueTheme] = useState('');
  const [houseList, setHouseList] = useState([]);
  const [filterTheme, setFilterTheme] = useState('');

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

  const url = [search, queryString].join('&');

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

  const resetUrl = '?' + resetString;

  return (
    //value를 통해 전달하고 싶은 값을 넣어준다.
    <AmenityFilterContext.Provider
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
        formData,
        handlePlaceFetcher,
        formData2,
        resetString,
        resetUrl,
      }}
    >
      {props.children}
    </AmenityFilterContext.Provider>
  );
}
export default AmenityFilterStore;
