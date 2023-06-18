import React from 'react';
import { MdCheckCircle, MdClose } from 'react-icons/md';
import { ModalContainer, ModalContent, FormButton } from '../styles/Modal.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetStep } from '../../features/stepSlice';

interface ModalProps {
  onClose: () => void;
  message: string;
  isOpen: boolean;
  successful: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, message, isOpen, successful }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const handleButtonClick = () => {
    if (successful) {
      dispatch(resetStep());
      navigate('/');
    } else {
      onClose();
    }
  };

  return (
    <ModalContainer>
      <ModalContent>
        <h2>{message}</h2>
        {successful ? <MdCheckCircle size={90} color='green' /> : <MdClose size={90} color='red' />}
        <FormButton id={successful ? 'button-to-main' : 'button-close'} onClick={handleButtonClick}>
          {successful ? 'To main page' : 'Close'}
        </FormButton>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
