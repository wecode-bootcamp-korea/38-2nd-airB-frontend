import React from 'react';
import Modal from './Modal';
import SignIn from '../SignIn/SignIn';
import theme from '../../styles/theme';

const SignInModal = ({ isSignInModalOpen, setIsSignInModalOpen }) => {
  return (
    <Modal
      isModalOpen={isSignInModalOpen}
      setIsModalOpen={setIsSignInModalOpen}
      modalStyle={modalStyle}
    >
      <SignIn setIsModalOpen={setIsSignInModalOpen} />
    </Modal>
  );
};

export default SignInModal;

const modalStyle = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `${theme.colors.transparentBlack3}`,
    zIndex: `${theme.levels.modalOverlay}`,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '500px',
    height: '234px',
    bottom: '40px',
    border: 'none',
    background: `${theme.colors.white}`,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '20px',
    outline: 'none',
    padding: '0px',
    transform: 'translate(-50%, -50%)',
  },
};
