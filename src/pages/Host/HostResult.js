import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import variables from '../../styles/variables';
import { HostContext } from './User';

const HostResult = () => {
  const [hostDescription, sethostDescription] = useState('');
  const context = useContext(HostContext);

  const {
    where,
    lat,
    lng,
    title,
    description,
    people,
    price,
    bed,
    room,
    bath,
    view,
    city,
    imgs,
  } = context;
  const result = {
    title: title,
    price: price,
    latitude: lat,
    longitude: lng,
    description: description,
    bed: bed,
    bedroom: room,
    bathroom: bath,
    guestMax: people,
    buildingTypeId: where,
    cityId: city,
    themeId: view,
    hostDescription: hostDescription,
  };

  const images = imgs ? imgs.map(img => img[0]) : null;

  const goMainPage = () => {
    const formData = new FormData();

    const isAllFilledForm = Object.values(context).every(
      value => value.length !== 0
    );

    if (!isAllFilledForm) {
      alert('빠진 곳이 없는지 확인하세요.');
    } else {
      // location('/');
      alert('호스트님, 환영합니다. 😆');
    }
    // FIXME 추후 수정

    for (let key in result) {
      formData.append(key, result[key]);
    }
    // FIXME 추후 삭제
    let entries = formData.entries();
    for (const pair of entries) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
    console.log(formData);
    fetch(`http://10.58.52.51:3000/host`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('accessToken'),
      },
      body: formData,
    });
  };
  const surprise = () => {
    alert('🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪');
  };
  const hostDescriptionInput = e => {
    sethostDescription(e.target.value);
  };
  return (
    <S.Background>
      <S.BackgroundImg src="https://images.unsplash.com/photo-1517495306984-f84210f9daa8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" />
      <S.Animation>
        <S.Phone>
          <S.PhoneWhite>
            <S.ResultBox>
              <S.ResultTitle>AirBorB</S.ResultTitle>
              <S.ResultListBox>
                <S.Result>{title}</S.Result>
                <S.ResultDes>{description}</S.ResultDes>
                <S.Result>{people} 명</S.Result>
                <S.Result>{price.toLocaleString()} 원</S.Result>
                <S.HostDes
                  onChange={hostDescriptionInput}
                  placeholder="클릭 후 호스트님 소개해주세요!"
                />
              </S.ResultListBox>
            </S.ResultBox>
            <S.RssultBtnCenter>
              <S.ResultBtn onClick={goMainPage}>완 료</S.ResultBtn>
            </S.RssultBtnCenter>
          </S.PhoneWhite>
          <S.PhoneBtn onClick={surprise} />
        </S.Phone>
      </S.Animation>
    </S.Background>
  );
};
export default HostResult;

const S = {
  Background: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 78%;
    background-color: #f8f8ff;
  `,

  BackgroundImg: styled.img`
    position: fixed;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  `,

  ResultTitle: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 100%;
    height: 90px;
    font-size: 35px;
    font-weight: bold;
    color: #212121;
  `,
  Animation: styled.div`
    animation-name: fadeOut;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  Phone: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 380px;
    height: 550px;
    border-radius: 20px;
    background-color: #212121;
  `,

  PhoneWhite: styled.div`
    width: 350px;
    height: 465px;
    border-radius: 20px;
    background-color: white;
  `,

  PhoneBtn: styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: black;
    cursor: pointer;
  `,

  ResultBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    animation-name: fadeOut;
    animation-duration: 0.3s;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes fadeOut {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `,

  ResultListBox: styled.div`
    ${variables.flex('column', 'center', 'center')};
    margin: 10px 0 5px;
  `,

  Result: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 250px;
    height: 40px;
    color: #212121;
  `,

  ResultDes: styled.div`
    ${variables.flex('column', 'center', 'center')};
    width: 330px;
    height: 100px;
    color: #212121;
  `,

  RssultBtnCenter: styled.div`
    ${variables.flex('column', 'center', 'center')};
  `,

  ResultBtn: styled.button`
    position: relative;
    width: 180px;
    height: 40px;
    color: white;
    background-color: #212121;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    animation-name: motion;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-direction: alternate;

    @keyframes motion {
      0% {
        top: 20px;
      }
      100% {
        top: 0px;
      }
    }
  `,
  HostDes: styled.input`
    width: 250px;
    height: 80px;
    margin-top: 10px;
    border: none;
    font-size: 15px;

    &::placeholder {
      text-align: center;
    }
  `,
};
