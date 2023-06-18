import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';
import {
  BaseInput,
  BaseMainContent,
  BaseFormBlock,
  BaseFormContainer,
  BaseFormLabel,
  BaseForms,
  BaseStepButton,
  BaseFormHelperText,
  BaseControls,
} from './BaseStyles';

type FormButtonProps = {
  variant: 'back' | 'forward' | 'add' | 'delete';
};

export const MainContent = styled(BaseMainContent)``;

export const FormBlock = styled(BaseFormBlock)``;

export const Forms = styled(BaseForms)``;

export const FormContainer = styled(BaseFormContainer)`
  position: relative;
`;

export const FormLabel = styled(BaseFormLabel)``;

export const FormInput = styled(BaseInput)`
  max-width: 300px;
  margin-right: 19px;
  margin-bottom: 8px;
`;

export const FormHelperText = styled(BaseFormHelperText)`
  position: absolute;
  color: red;
  bottom: 0;
  cursor: pointer;
`;

export const FormSmallLabel = styled.label``;

export const FormButton = styled(BaseStepButton)<FormButtonProps>`
  ${({ variant }) =>
    variant === 'forward'
      ? `
          background-color: #5558fa;
          color: white;
          border: none;
          &:hover {
            background-color: #3f41b3;
          } 
        `
      : `
          background-color: white;
          color: #5558fa;
          border: 2px solid #5558fa;
          &:hover {
            background-color: rgba(63,65,179, 0.3);
            border: 2px solid #3f41b3;
          }
        `}
`;

export const Advantage = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const FormAdvantagesButton = styled.button<FormButtonProps>`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 44px;
  height: 44px;
  background-color: white;
  font-size: 23px;
  line-height: 1px;
  border-color: #5558fa;
  color: #5558fa;
  margin-bottom: 24px;

  &:hover {
    background-color: rgba(63, 65, 179, 0.3);
    border: 2px solid #3f41b3;
  }
`;

export const RemoveButton = styled(FaTrash)`
  color: grey;
  width: 14px;
  height: 14px;
  margin-right: 5px;
  position: relative;
  top: -5px;
  cursor: pointer;

  &:hover {
    color: darkred;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 5px;
`;

export const Checkbox = styled.div`
  display: flex;

  input {
    width: 15px;
    height: 15px;
    background-color: white;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Radio = styled.div`
  display: flex;

  input {
    width: 15px;
    height: 15px;
    background-color: white;
    margin-right: 10px;
    cursor: pointer;
  }
`;

export const Controls = styled(BaseControls)``;
