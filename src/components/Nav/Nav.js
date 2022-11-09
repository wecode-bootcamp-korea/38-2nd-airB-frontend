import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SignInModal from '../Modal/SignInModal';
import GlobalNav from './GlobalNav/GlobalNav';
import Search from './GlobalNav/Search';

const Nav = () => {
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [guestNum, setGuestNum] = useState(0);
  const [selectedLocation, setSelectedLocation] = useState('어디든지');
  const modalRef = useRef();
  const navigate = useNavigate();
  const isToken = localStorage.getItem('accessToken');

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

  return (
    <>
      <div>
        <GlobalNav
          handleSearchBar={handleSearchBar}
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
          isToken={isToken}
        />
        <Search
          isOpenSearchBar={isOpenSearchBar}
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
          navigate={navigate}
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
