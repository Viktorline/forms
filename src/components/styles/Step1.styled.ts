import styled from 'styled-components';
import {
  BaseFormBlock,
  BaseFormContainer,
  BaseFormHelperText,
  BaseFormLabel,
  BaseForms,
  BaseInput,
  BaseMainContent,
  BaseStepButton,
  BaseControls,
} from './BaseStyles';

type FormButtonProps = {
  variant: 'back' | 'forward';
};

export const MainContent = styled(BaseMainContent)``;

export const FormBlock = styled(BaseFormBlock)``;

export const Forms = styled(BaseForms)``;

export const FormContainer = styled(BaseFormContainer)``;

export const FormLabel = styled(BaseFormLabel)``;

export const FormInput = styled(BaseInput)`
  max-width: 300px;
`;

export const FormHelperText = styled(BaseFormHelperText)`
  cursor: pointer;
`;

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

export const FormSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  height: 44px;
  background-color: white;

  option {
    background: white;
    font-size: 14px;
  }
`;

export const Controls = styled(BaseControls)``;
