import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const Modal = ({ isOpen, handleCloseModal, children }) => {
  return (
    <ModalWrapper appElement={document.getElementById('root')} isOpen={isOpen} onRequestClose={handleCloseModal}>
      {children}
      <Button isBig onClick={handleCloseModal}>
        Close
      </Button>
    </ModalWrapper>
  );
};

export default Modal;
