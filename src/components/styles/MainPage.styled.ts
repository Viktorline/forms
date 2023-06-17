import styled from 'styled-components';
import { FaFolder } from 'react-icons/fa';
import InputMask from 'react-input-mask';

export const MainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 24px;
  margin-bottom: 245px;
`;

export const ProfileBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Logo = styled.div`
  background-color: #d5e4f7;
  font-size: 40px;
  min-width: 80px;
  min-height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 80px;
  margin-right: 24px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Name = styled.h1`
  font-size: 20px;
  position: relative;
  top: 3px;
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

export const LinkIcon = styled(FaFolder)`
  color: grey;
  width: 14px;
  height: 14px;
  margin-right: 5px;
  position: relative;
  top: 2px;
`;

export const Link = styled.a`
  font-size: 12px;
  text-decoration: none;
  margin-right: 20px;
  position: relative;
  bottom: 2px;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #b3b3b3;
  opacity: 0.8;
  margin-bottom: 24px;
`;

///////////////////////////////////////////////////////////

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  margin-bottom: 23px;
  position: relative;
`;

export const FormButton = styled.button`
  padding: 10px;
  background-color: #5558fa;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 79px;
  height: 44px;

  &:hover {
    background-color: #3f41b3;
  }

  &:active {
    background-color: #2c2e8c;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-bottom: 0px;

  .error {
    border-color: red;
  }

  .error-message {
    position: absolute;
    bottom: 0;
    left: 0;
    color: red;
  }
`;

export const Forms = styled.div`
  margin-bottom: 23px;
`;

export const StyledInputMask = styled(InputMask)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  height: 44px;
  margin-bottom: 25px;
`;

export const FormLabel = styled.label`
  margin-bottom: 7px;
`;

export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  height: 44px;
  margin-bottom: 25px;
`;

export const FormHelperText = styled.p`
  line-height: 1;
  font-size: 11px;
`;
