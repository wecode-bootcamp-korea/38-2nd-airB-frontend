import React, { createContext, useState } from 'react';

export const HostContext = createContext();
// createContext()로 비어 있는 context가 만들어진다.

function HostStore(props) {
  const [filterTheme, setFilterTheme] = useState(0);
  const [filterMap, setFilterMap] = useState(0);
  const [data, setData] = useState([]);
  // props로 지정하고 싶은 상태를 만들어준다.

  return (
    //value를 통해 전달하고 싶은 값을 넣어준다.
    <HostContext.Provider
      value={{
        filterTheme,
        setFilterTheme,
        data,
        setData,
        filterMap,
      }}
    >
      {props.children}
    </HostContext.Provider>
  );
}
export default HostStore;
