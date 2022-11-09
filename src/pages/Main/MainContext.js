import React, { createContext, useState } from 'react';

export const MainContext = createContext();

function MainStore(props) {
  const [isMapShowing, setMapShowing] = useState(false);

  return (
    <MainContext.Provider
      value={{
        isMapShowing,
        setMapShowing,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
}
export default MainStore;
