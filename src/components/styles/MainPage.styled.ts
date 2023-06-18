import styled from 'styled-components';
import { FaFolder } from 'react-icons/fa';
import InputMask from 'react-input-mask';
import {
  BaseButton,
  BaseInput,
  BaseMainContent,
  BaseFormBlock,
  BaseFormContainer,
  BaseFormLabel,
  BaseForms,
  BaseFormHelperText,
} from './BaseStyles';

export const MainContent = styled(BaseMainContent)`
  padding: 24px;
  margin-bottom: 245px;
`;

export const FormContainer = styled(BaseFormContainer)`
  position: relative;

  .error-message {
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;

export const Forms = styled(BaseForms)``;

export const FormLabel = styled(BaseFormLabel)``;

export const FormBlock = styled(BaseFormBlock)``;

export const FormHelperText = styled(BaseFormHelperText)``;

export const FormButton = styled(BaseButton)`
  background-color: #5558fa;
  color: white;

  &:hover {
    background-color: #3f41b3;
  }

  &:active {
    background-color: #2c2e8c;
  }
`;

export const FormInput = styled(BaseInput)`
  margin-bottom: 25px;
`;

export const MaskedInput = styled(InputMask)`
  padding: 10px;
  margin-bottom: 25px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  height: 44px;
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
  cursor: default;
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

  &:hover {
    color: #5558fa;
  }

  @media (max-width: 550px) {
    margin-right: 2px;
  }
`;

export const Link = styled.a`
  font-size: 12px;
  text-decoration: none;
  margin-right: 20px;
  position: relative;
  bottom: 2px;
  color: #333333;

  &:hover {
    color: #5558fa;
  }

  a:visited {
    color: #5558fa;
  }

  @media (max-width: 550px) {
    margin-right: 7px;
  }
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: #b3b3b3;
  opacity: 0.8;
  margin-bottom: 24px;
`;
