import React, { createContext, useState } from 'react';

export const MainContext = createContext();
// createContext()로 비어 있는 context가 만들어진다.

function MainStore(props) {
  // props로 지정하고 싶은 상태를 만들어준다.

  const [countbed, setCountbed] = useState(0);
  const [countbedroom, setCountbedroom] = useState(0);
  const [countbathroom, setCountbathroom] = useState(0);
  const [buildingType, setBuildingType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filterFetcher, setFilterFetcher] = useState([]);
  const [filterValue, setFilterValue] = useState();
  const [valueFilterMain, setValueFilterMain] = useState('');
  const [valueTheme, setValueTheme] = useState('');
  const [houseList, setHouseList] = useState([]);

  return (
    //value를 통해 전달하고 싶은 값을 넣어준다.
    <MainContext.Provider
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
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
export default MainStore;
