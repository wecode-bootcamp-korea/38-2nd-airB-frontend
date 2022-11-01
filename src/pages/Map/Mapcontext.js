import React, { createContext, useState } from 'react';

export const HostContext = createContext();

function HostStore(props) {
  const [filterTheme, setFilterTheme] = useState('');
  const [filterMap, setFilterMap] = useState(0);
  const [filterlocation, setFilterLocation] = useState('');
  const [data, setData] = useState([]);
  const [basicScale, setBasicScale] = useState(10);
  const [basicLat, setBasicLat] = useState(37.54376416965958);
  const [basicLng, setBasicLng] = useState(126.91244013156506);

  return (
    <HostContext.Provider
      value={{
        filterTheme,
        setFilterTheme,
        data,
        setData,
        filterMap,
        filterlocation,
        setFilterLocation,
        basicLat,
        setBasicLat,
        basicLng,
        setBasicLng,
        basicScale,
        setBasicScale,
      }}
    >
      {props.children}
    </HostContext.Provider>
  );
}
export default HostStore;
