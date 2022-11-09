import { React, useState, useEffect } from 'react';
import { addDays } from 'date-fns';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useParams } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components/macro';
import CalanderComponent from '../../components/Calander/CalanderComponent';
import 'react-datepicker/dist/react-datepicker.css';
import theme from '../../styles/theme';

const Detail = () => {
  const params = useParams();
  const productId = params.id;
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 402) {
      setIsNavVisible(true);
    } else {
      setIsNavVisible(false);
    }
  };

  const changeScrollLocation = coordinate => {
    window.scrollTo({ top: coordinate, behavior: 'smooth' });
  };

  function getDateRange(startDate, endDate, listDate) {
    const dateMove = new Date(startDate);
    let strDate = startDate;
    if (startDate == endDate) {
      strDate = dateMove.toISOString().slice(0, 10);
      listDate.push(strDate);
    } else {
      while (strDate < endDate) {
        strDate = dateMove.toISOString().slice(0, 10);
        listDate.push(strDate);
        dateMove.setDate(dateMove.getDate() + 1);
      }
    }
    return listDate;
  }

  const makeInputToPriceFormat = number => {
    let num = Number.parseFloat(number).toFixed(0);
    const comma = num => {
      num = String(num);
      return num.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    };
    const uncomma = num => {
      num = String(num);
      return num.replace(/[^\d]+/g, '');
    };
    return comma(uncomma(num));
  };

  useEffect(() => {
    fetch(`http://10.58.52.51:3000/product/${productId}`, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(result => {
        setProduct(result);
        setLoading(false);
        console.log(result);
      })
      .catch(err => alert(err.message));
  }, [productId]);

  if (loading) return;

  if (!product.data[0].reservations) {
    product.data[0].reservations = [
      {
        check_in: '1111-11-11',
        check_out: '1111-11-12',
      },
    ];
  } else {
  }
  if (!product.data[0].holidays) {
    product.data[0].holidays = [
      {
        check_in: '1111-11-13',
        check_out: '1111-11-14',
      },
    ];
  }
  const pictureArrayWithoutThumbnail = product.data[0].imageUrl.slice(1);

  let excludedDateArray = [];
  const reservedAndHolidaysArray = [
    ...product.data[0].reservations,
    ...product.data[0].holidays,
  ];

  {
    reservedAndHolidaysArray.map(el => {
      return getDateRange(el.check_in, el.check_out, excludedDateArray);
    });
  }

  excludedDateArray = [...new Set(excludedDateArray)];
  excludedDateArray.sort(function (a, b) {
    return a - b;
  });

  return (
    <S.Detail>
      {isNavVisible && (
        <S.HiddenNav>
          <S.NavAnchor
            onClick={() => {
              changeScrollLocation(0);
            }}
          >
            사진
          </S.NavAnchor>
          <S.NavAnchor
            onClick={() => {
              changeScrollLocation(600);
            }}
          >
            설명
          </S.NavAnchor>
          <S.NavAnchor
            onClick={() => {
              changeScrollLocation(1250);
            }}
          >
            예약
          </S.NavAnchor>
          <S.NavAnchor
            onClick={() => {
              changeScrollLocation(2000);
            }}
          >
            위치
          </S.NavAnchor>
        </S.HiddenNav>
      )}
      <S.DetailPageContainer>
        <S.DetailPageTitleContainer>
          <S.DetailPageTitleTextContainer>
            <S.DetailPageMainText>{product.data[0].title}</S.DetailPageMainText>
            <S.DetailPageSubText>
              {product.data[0].city} {product.data[0].theme}
            </S.DetailPageSubText>
          </S.DetailPageTitleTextContainer>
          <S.TitleShareAndHeartContainer>
            <S.TitleButton>공유하기</S.TitleButton>
            <S.TitleButton>저장</S.TitleButton>
          </S.TitleShareAndHeartContainer>
        </S.DetailPageTitleContainer>
        <S.DetailPagePhotoZoneContainer>
          <S.ThumbnailPictureContainer>
            <S.ThumbnailPicture imageUrl={product.data[0].imageUrl[0]} />
          </S.ThumbnailPictureContainer>
          <S.SmallPictureContainer>
            {pictureArrayWithoutThumbnail.map((picture, index) => {
              return <S.SmallPicture imageUrl={picture} key={index} />;
            })}
          </S.SmallPictureContainer>
        </S.DetailPagePhotoZoneContainer>
        <S.ArticleContainer>
          <S.MainArticleContainer>
            <S.ArticleTitleContainer>
              <S.ArticleTextContainer>
                <S.ArticleMainText>
                  {product.data[0].hostName}님이 호스팅하는 게스트용
                  {product.data[0].buildingType} 전체
                </S.ArticleMainText>
                <S.ArticleSubText>
                  최대수용인원 {product.data[0].guestMax} 명, 침실
                  {product.data[0].bedroom}개, 침대
                  {product.data[0].bed}개, 욕실
                  {product.data[0].bathroom}개,
                </S.ArticleSubText>
              </S.ArticleTextContainer>
              <S.ArticleTitleProfileIcon imageUrl="https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" />
            </S.ArticleTitleContainer>
            <S.ProductDescriptionContainer>
              {product.data[0].description}
              <S.ShowMoreLink>더 알아보기</S.ShowMoreLink>
            </S.ProductDescriptionContainer>
            <S.InsuranceGuidingBox>
              모든 예약에는 호스트가 예약을 취소하거나 숙소 정보가 정확하지 않은
              경우 또는 체크인에 문제가 있는 상황에 대비한 무료 보호 프로그램이
              포함됩니다.
              <S.ShowMoreLink>더 알아보기</S.ShowMoreLink>
            </S.InsuranceGuidingBox>
            <S.FacilityInfoBox>
              <S.FacilityInfoBoxTitleText>숙박장소</S.FacilityInfoBoxTitleText>
              <S.FacilityInfoBoxSubText>
                이 숙소는 침실
                {product.data[0].bedroom}개, 침대
                {product.data[0].bed}개, 욕실
                {product.data[0].bathroom}개를 제공합니다 !
              </S.FacilityInfoBoxSubText>
            </S.FacilityInfoBox>
            <S.ArticleCalanderContainerTitle>
              체크인/체크아웃
            </S.ArticleCalanderContainerTitle>
            <S.ArticleCalanderContainer>
              <S.ArticleCalander
                selected={startDate}
                locale={ko}
                onChange={date => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
                maxDate={addDays(startDate, 100)}
                minDate={new Date()}
              />
              <S.ArticleCalander
                selected={endDate}
                locale={ko}
                onChange={date => setEndDate(date)}
                dateFormat="yyyy-MM-dd"
                minDate={addDays(startDate, 1)}
                maxDate={addDays(startDate, 100)}
              />
            </S.ArticleCalanderContainer>
          </S.MainArticleContainer>
          <S.AsideContainer>
            <S.AsidePriceTitle>
              ₩{makeInputToPriceFormat(product.data[0].price)}/박
            </S.AsidePriceTitle>
            <S.AsideCalanderContainer>
              <CalanderComponent
                excludeDateArray={excludedDateArray}
                price={product.data[0].price}
                guestMax={product.data[0].guestMax}
                getDateRange={getDateRange}
                productId={productId}
                makeInputToPriceFormat={makeInputToPriceFormat}
              />
            </S.AsideCalanderContainer>
          </S.AsideContainer>
        </S.ArticleContainer>
        <S.MapContainer>
          <S.MapContainerTitle>호스팅 지역</S.MapContainerTitle>
          <Map
            center={{
              lat: `${product.data[0].coordinate.lat}`,
              lng: `${product.data[0].coordinate.lng}`,
            }}
            style={{ width: '100%', height: '450px', zIndex: 0 }}
          >
            <MapMarker
              position={{
                lat: `${product.data[0].coordinate.lat}`,
                lng: `${product.data[0].coordinate.lng}`,
              }}
            />
          </Map>
        </S.MapContainer>
      </S.DetailPageContainer>
    </S.Detail>
  );
};
export default Detail;

const S = {
  Detail: styled.div`
    width: 1400px;
    padding: 0 30px;
    margin: 0 auto;
    position: relative;
  `,

  DetailPageContainer: styled.div``,

  HiddenNav: styled.div`
    width: 100%;
    height: 90px;
    padding: 0px 150px;
    position: fixed;
    display: flex;
    background-color: white;
    z-index: 1;
    border-bottom: solid 1px #e0e0e0;
    top: 0;
    right: 0;
  `,

  NavAnchor: styled.div`
    height: 100%;
    width: 60px;
    margin-right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
      border-bottom: 5px solid black;
      transition-duration: 0.3s;
    }
    cursor: pointer;
  `,
  DetailPageTitleTextContainer: styled.div``,

  TitleShareAndHeartContainer: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
  `,

  TitleButton: styled.button`
    weight: 50px;
    border: none;
    background-color: white;
    font-size: 14px;
    font-weight: 700;
    border-radius: 10px;
    margin-left: 10px;
    padding: 10px 30px;
    &:hover {
      background-color: #e0e0e0;
      cursor: pointer;
    }
  `,

  DetailPageTitleContainer: styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;
  `,

  DetailPageMainText: styled.div`
    padding-bottom: 20px;
    font-size: 25px;
  `,

  DetailPageSubText: styled.div`
    font-size: 13px;
  `,

  DetailPagePhotoZoneContainer: styled.div`
    display: flex;
    border-radius: 15px;
    overflow: hidden;
  `,
  ThumbnailPictureContainer: styled.div`
    height: 550px;
    width: 50%;
  `,
  ThumbnailPicture: styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(${props => props.imageUrl});
  `,
  SmallPictureContainer: styled.div`
    height: 550px;
    width: 50%;
    display: flex;
    flex-wrap: wrap;
  `,

  SmallPicture: styled.div`
    width: 50%;
    height: 50%;
    background-size: cover;
    background-image: url(${props => props.imageUrl});
  `,

  ArticleContainer: styled.div`
    margin-top: 50px;
    height: 800px;
    position: relative;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
  `,

  MainArticleContainer: styled.div`
    width: 60%;
  `,

  ArticleTitleContainer: styled.div`
    border-bottom: #e0e0e0 1px solid;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
  `,
  ArticleTextContainer: styled.div`
    width: 90%;
  `,
  ArticleMainText: styled.div`
    font-size: 43px;
    font-weight: 500;
    margin-bottom: 20px;
    line-height: 60px;
  `,
  ArticleSubText: styled.div`
    margin-top: 5px;
  `,

  ArticleTitleProfileIcon: styled.div`
    height: 60px;
    width: 60px;

    border-radius: 100%;
    background-size: cover;
    background-image: url(${props => props.imageUrl});
  `,
  InsuranceGuidingBox: styled.div`
    border-bottom: #e0e0e0 solid 1px;
    padding: 40px 0px;
  `,

  FacilityInfoBox: styled.div`
    border-bottom: #e0e0e0 solid 1px;
    padding: 40px 0px;
  `,
  FacilityInfoBoxTitleText: styled.div`
    font-size: 26px;
  `,
  FacilityInfoBoxSubText: styled.div`
    margin-top: 20px;
    font-size: 17px;
  `,

  ArticleCalanderContainerTitle: styled.div`
    font-size: 23px;
    font-weight: 500;
    margin: 40px 0px;
  `,
  ArticleCalanderContainer: styled.div`
    display: flex;
    .react-datepicker__day--selected {
      background-color: ${theme.colors.blue};
    }
  `,

  ArticleCalander: styled(DatePicker)`
    width: 95%;
    height: 30px;
    font-size: 20px;
    text-align: center;
    border-radius: 20px;
  `,

  ShowMoreLink: styled.div`
    text-decoration: underline;
    font-weight: 500;
    padding-top: 20px;
    cursor: pointer;
  `,

  ProductDescriptionContainer: styled.div`
    border-bottom: #e0e0e0 solid 1px;
    padding: 40px 0px;
  `,
  AsideContainer: styled.div`
    width: 35%;
    height: 520px;
    padding: 30px 15px;
    top: 90px;
    border-radius: 12px;
    border: 1px solid rgb(221, 221, 221);
    box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
    position: sticky;
  `,

  AsidePriceTitle: styled.div`
    font-size: 50px;
    font-weight: 800;
    margin-bottom: 20px;
  `,

  AsideCalanderContainer: styled.div``,

  MapContainer: styled.div`
    width: 100%;
  `,

  MapContainerTitle: styled.div`
    padding-top: 40px;
    margin-top: 30px;
    padding-bottom: 30px;
    font-size: 23px;
    border-top: gray 0.5px solid;
  `,
};
