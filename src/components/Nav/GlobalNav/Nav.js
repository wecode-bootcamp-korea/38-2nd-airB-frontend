import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalNav from './GlobalNav';
import Search from './Search';
import SignInModal from '../../Modal/SignInModal';

const Nav = () => {
  const [isOpenSearhBar, setIsOpenSearchBar] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guestNum, setGuestNum] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState('여행지 검색');
  const modalRef = useRef();
  const navigate = useNavigate();

  const handleSearchBar = () => {
    setIsOpenSearchBar(true);
  };

  const handleProfileModal = () => {
    setIsProfileModalOpen(true);
  };

  const onCloseModal = () => {
    setIsOpenSearchBar(false);
  };

  const onChange = dates => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const increaseGuestNum = () => {
    setGuestNum(prev => prev + 1);
  };

  const decreaseGuestNum = () => {
    setGuestNum(prev => prev - 1);
  };

  const dateToString = date => {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <>
      <div>
        <GlobalNav
          handleSearchBar={handleSearchBar}
          dateToString={dateToString}
          startDate={startDate}
          endDate={endDate}
          selectedLocation={selectedLocation}
          isProfileModalOpen={isProfileModalOpen}
          setIsProfileModalOpen={setIsProfileModalOpen}
          isSignInModalOpen={isSignInModalOpen}
          setIsSignInModalOpen={setIsSignInModalOpen}
          handleProfileModal={handleProfileModal}
          guestNum={guestNum}
          navigate={navigate}
        />
        <Search
          isOpenSearhBar={isOpenSearhBar}
          handleSearchBar={handleSearchBar}
          onCloseModal={onCloseModal}
          setIsOpenSearchBar={setIsOpenSearchBar}
          modalRef={modalRef}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          guestNum={guestNum}
          increaseGuestNum={increaseGuestNum}
          decreaseGuestNum={decreaseGuestNum}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          dateToString={dateToString}
        />
      </div>
      {isSignInModalOpen && (
        <SignInModal
          isSignInModalOpen={isSignInModalOpen}
          setIsSignInModalOpen={setIsSignInModalOpen}
        />
      )}
    </>
  );
};

export default Nav;
