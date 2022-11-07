import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const Modal = ({ isModalOpen, setIsModalOpen, children, modalStyle }) => {
  return (
    <div>
      <ReactModal
        isOpen={isModalOpen}
        style={modalStyle}
        ariaHideApp={false}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <S.ModalWrapper>{children}</S.ModalWrapper>
      </ReactModal>
    </div>
  );
};

export default Modal;

const S = {
  ModalWrapper: styled.div``,
};
