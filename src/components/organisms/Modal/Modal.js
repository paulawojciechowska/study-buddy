import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'components/atoms/Button/Button';
import { ModalWrapper } from './Modal.styles';

const modalContainer = document.getElementById('modal-container');

const Modal = ({ handleCloseModal, children }) => {
  const modalNode = document.createElement('div');

  useEffect(() => {
    modalContainer.appendChild(modalNode);
    return () => {
      modalContainer.removeChild(modalNode);
    };
  });

  return ReactDOM.createPortal(
    <ModalWrapper>
      {children}
      <Button isBig onClick={handleCloseModal}>Save</Button>
    </ModalWrapper>,
    modalNode
  );
};

export default Modal;