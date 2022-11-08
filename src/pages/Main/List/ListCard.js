import React, { useState, useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ListCard = ({ data }) => {
  const priceToString = price => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <S.Linker to={`/detail/:${data.id}`}>
      <S.WholeWrapper>
        <S.CardWrapper>
          <S.CardImageCarousel
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {data?.image?.map((el, index) => (
              <S.CardSwiperSlide key={index}>
                <S.CardImage src={el} />
              </S.CardSwiperSlide>
            ))}
          </S.CardImageCarousel>
          <S.CardTitle>{data?.title}</S.CardTitle>
          <S.CardDescription>{data?.city}</S.CardDescription>
          <S.CardPrice>
            ₩{priceToString(Math.round(data?.price))}/박
          </S.CardPrice>
        </S.CardWrapper>
      </S.WholeWrapper>
    </S.Linker>
  );
};

export default ListCard;

const S = {
  Linker: styled(Link)`
    text-decoration: none;
    width: 316px;
    height: 400px;
    color: black;
  `,

  WholeWrapper: styled.div`
    width: 316px;
    height: 400px;
    margin-bottom: 30px;
  `,

  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    width: 316px;
    height: 400px;
    margin: 20px;
  `,

  CardImageCarousel: styled(Swiper)`
    height: 300px;
  `,

  CardSwiperSlide: styled(SwiperSlide)`
    height: 295px;
    background-color: #eeeeee;
  `,

  CardImage: styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
  `,

  CardTitle: styled.div`
    font-size: 15px;
    font-weight: bold;
    padding-top: 10px;
  `,

  CardDescription: styled.div`
    font-size: 15px;
    color: #717171;
    padding-top: 10px;
  `,

  CardPrice: styled.div`
    font-size: 15px;
    font-weight: bold;
    padding-top: 10px;
    margin-bottom: 20px;
  `,

  IconWrapper: styled(AiOutlineHeart)`
    font-size: 26px;
    position: absolute;
    top: 20px;
    left: 200px;
    z-index: 10;
    color: white;
    fill: #727878;
  `,
};
