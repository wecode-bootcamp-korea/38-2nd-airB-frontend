import React from 'react';
import SignIn from '../SignIn/SignIn';
import Modal from './Modal';

const SignInModal = ({ isModalOpen, setIsModalOpen, onClose }) => {
  const modalStyle = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '500px',
      height: '234px',
      bottom: '40px',
      border: 'none',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '20px',
      outline: 'none',
      padding: '0px',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      modalStyle={modalStyle}
    >
      <SignIn />
    </Modal>
  );
};

export default SignInModal;
