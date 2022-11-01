import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const BottomSheet = props => {
  const { active, handleModal, children } = props;

  return (
    <div style={{ position: 'absolute' }}>
      <S.BackdropBg active={active} onClick={handleModal} />
      <S.BottomSheetContainer active={active}>
        {children}
      </S.BottomSheetContainer>
    </div>
  );
};

export default BottomSheet;

const S = {
  BottomSheetContainer: styled.div`
    position: fixed;
    bottom: ${({ active }) => (active ? '0%' : '-100%')};
    left: 0;
    right: 0;
    padding: 40px 30px;
    border-radius: 20px 20px 0 0;
    background-color: ${theme.colors.white};
    transition: 0.4s;
    z-index: ${theme.levels.bottomModal};
  `,

  BackdropBg: styled.div`
    position: fixed;
    bottom: ${({ active }) => (active ? '0%' : '-100%')};
    left: 0;
    right: 0;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: ${theme.levels.backdrop};
  `,
};
