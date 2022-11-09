import React, { useState } from 'react';
import { BsGlobe, BsChevronUp, BsXCircle } from 'react-icons/bs';
import styled from 'styled-components';
import theme from '../../styles/theme';
import variables from '../../styles/variables';
import BottomSheet from '../BottomSheet/BottomSheet';

const Footer = () => {
  const [isShowing, setIsShowing] = useState(false);

  const showModal = () => {
    setIsShowing(true);
  };

  const closeModal = () => {
    setIsShowing(false);
  };

  const handleModal = e => {
    e.stopPropagation();
    setIsShowing(false);
  };

  return (
    <S.FoooterContainer>
      <S.FooterCenter>
        <S.FooterTop>
          <ul>
            <S.FooterListItem>© 2022 AirB, Inc</S.FooterListItem>
            <S.FooterListItem>개인정보 처리 방침</S.FooterListItem>
            <S.FooterListItem>이용약관</S.FooterListItem>
            <S.FooterListItem>사이트맵</S.FooterListItem>
            <S.FooterListItem>한국의 변경된 환불정책</S.FooterListItem>
            <S.FooterListItem>회사 세부정보</S.FooterListItem>
          </ul>
          <ul>
            <S.FooterListItem>
              <S.LanguageBtn>
                <BsGlobe />
                <S.FooterBtnText>한국어(KR)</S.FooterBtnText>
              </S.LanguageBtn>
            </S.FooterListItem>
            <S.FooterListItem>₩ KRW</S.FooterListItem>
            <S.FooterListItem>
              <S.SupportOpenBtn onClick={showModal}>
                <S.FooterBtnText>지원 및 참고 자료</S.FooterBtnText>
                <BsChevronUp />
              </S.SupportOpenBtn>
            </S.FooterListItem>
          </ul>
          <BottomSheet active={isShowing} handleModal={handleModal}>
            <S.SupportCloseBtn onClick={closeModal}>
              <BsXCircle />
            </S.SupportCloseBtn>
            {SUPPORT_LIST.map(list => (
              <S.SupportList key={list.id}>
                <li>
                  <S.SupportListTitle>{list.title}</S.SupportListTitle>
                  <S.ContentList>
                    {list.content.map((content, idx) => (
                      <li key={idx}>{content}</li>
                    ))}
                  </S.ContentList>
                </li>
              </S.SupportList>
            ))}
          </BottomSheet>
        </S.FooterTop>
        <S.FooterBottom>
          <S.FooterBottomText>
            웹사이트 제공자: AirB, | 이사: Wecode | VAT 번호: WECODE1234 |
            사업자 등록 번호: WECODE 000 | 연락처: wecode@wecode.com 웹사이트,
            000-0000-0000 | 호스팅 서비스 제공업체: Wecode | AirB는 통신판매
            중개자로 AirB 플랫폼을 통하여 게스트와 호스트 사이에 이루어지는
            통신판매의 당사자가 아닙니다. AirB 플랫폼을 통하여 예약된 숙소,
            체험, 호스트 서비스에 관한 의무와 책임은 해당 서비스를 제공하는
            호스트에게 있습니다.
          </S.FooterBottomText>
        </S.FooterBottom>
      </S.FooterCenter>
    </S.FoooterContainer>
  );
};
export default Footer;

const SUPPORT_LIST = [
  {
    id: 1,
    title: 'AirB 지원',
    content: [
      '도움말 센터',
      '에어커버',
      '안정정보',
      '장애원 지원',
      '예약 취소 옵션',
    ],
  },
  {
    id: 2,
    title: '호스팅',
    content: [
      '호스팅 시작하기',
      '호스트를 위한 에어커버',
      '호스팅 자료 둘러보기',
      '커뮤니티 포럼 방문하기',
      '책임감 있는 호스팅',
    ],
  },
];

const S = {
  FoooterContainer: styled.footer`
    ${variables.flex()};
    border-top: 1px solid #ddd;
    background-color: ${theme.colors.grayScale[0]};
    font-size: 14px;
  `,

  FooterCenter: styled.div`
    width: 1400px;
    padding: 40px 30px;
  `,

  FooterTop: styled.div`
    ${variables.flex('row', 'space-between', 'baseline')};
    padding-bottom: 30px;
  `,

  FooterListItem: styled.li`
    display: inline-block;
    color: ${theme.colors.middleGrey};
    cursor: pointer;

    &:not(:last-child)::after {
      content: '·';
      margin: 0 5px;
    }
  `,

  LanguageBtn: styled.button`
    padding: 0;
    border: none;
    background-color: transparent;
    color: ${theme.colors.middleGrey};
    cursor: pointer;
  `,

  FooterBottom: styled.div`
    border-top: 1px solid ${theme.colors.grayScale[1]};
  `,

  FooterBottomText: styled.p`
    margin-top: 20px;
    color: ${theme.colors.middleGrey};
    font-size: 12px;
    line-height: 16px;
  `,

  SupportOpenBtn: styled.button`
    border: none;
    padding: 0;
    background-color: transparent;
    color: ${theme.colors.middleGrey};
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      color: ${theme.colors.black};
    }
  `,

  FooterBtnText: styled.span`
    margin-left: 5px;
  `,

  SupportCloseBtn: styled.button`
    padding: 0;
    background-color: transparent;
    margin-bottom: 40px;
    border: none;
    font-size: 24px;
    cursor: pointer;
  `,

  SupportList: styled.ul`
    padding-bottom: 30px;
    margin-bottom: 30px;

    &:not(:last-child) {
      border-bottom: 1px solid #eee;
    }
  `,

  SupportListTitle: styled.span`
    display: block;
    margin-bottom: 20px;
    font-weight: 700;
  `,

  ContentList: styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 30px;
    cursor: pointer;
  `,
};
