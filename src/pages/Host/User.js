import React, { createContext, useState } from 'react';

export const HostContext = createContext();
// createContext()로 비어 있는 context가 만들어진다.

function HostStore(props) {
  // props로 지정하고 싶은 상태를 만들어준다.
  const [where, setWhere] = useState(0);
  const [view, setView] = useState(0);
  const [city, setCity] = useState(0);
  const [lat, setLat] = useState(37.5063);
  const [lng, setLng] = useState(127.0536);
  const [title, setTitle] = useState('');
  const [description, setdescription] = useState('');
  const [price, setPrice] = useState(0);
  const [people, setPeople] = useState(0);
  const [bed, setBed] = useState(0);
  const [room, setRoom] = useState(0);
  const [bath, setBath] = useState(0);
  const [img, setImg] = useState('');

  return (
    //value를 통해 전달하고 싶은 값을 넣어준다.
    <HostContext.Provider
      value={{
        where,
        setWhere,
        view,
        setView,
        city,
        setCity,
        lat,
        setLat,
        lng,
        setLng,
        title,
        setTitle,
        description,
        setdescription,
        price,
        setPrice,
        people,
        setPeople,
        bed,
        setBed,
        room,
        setRoom,
        bath,
        setBath,
        img,
        setImg,
      }}
    >
      {props.children}
    </HostContext.Provider>
  );
}
export default HostStore;
