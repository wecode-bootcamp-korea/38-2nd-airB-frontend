import React from 'react';
import ReactModal from 'react-modal';

const Modal = ({ isModalOpen, setIsModalOpen, children, modalStyle }) => {
  return (
    <div>
      <ReactModal
        isOpen={isModalOpen}
        style={modalStyle}
        ariaHideApp={false}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <div>{children}</div>
      </ReactModal>
    </div>
  );
};

export default Modal;
