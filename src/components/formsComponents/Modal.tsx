import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { ModalContainer, ModalContent, FormButton } from '../styles/Modal.styled';

const Modal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ModalContainer>
      <ModalContent>
        <h2>Header</h2>
        <MdCheckCircle size={32} />
        <FormButton onClick={onClose}>Close</FormButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
