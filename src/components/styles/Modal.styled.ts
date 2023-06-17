import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  width: 460px;
  height: 312px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 0;
  }
`;

export const FormButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 110px;
  height: 44px;
  background-color: #5558fa;
  color: white;
  border: none;
  margin-bottom: 10px;
`;
