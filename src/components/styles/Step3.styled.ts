import styled from 'styled-components';
import {
  BaseMainContent,
  BaseFormBlock,
  BaseFormLabel,
  BaseForms,
  BaseStepButton,
  BaseFormHelperText,
  BaseControls,
} from './BaseStyles';

type FormButtonProps = {
  variant: 'back' | 'send';
};

export const MainContent = styled(BaseMainContent)``;

export const FormBlock = styled(BaseFormBlock)``;

export const Forms = styled(BaseForms)`
  margin-bottom: 0px;

  .error {
    border-color: red;
  }
`;

export const FormLabel = styled(BaseFormLabel)``;

export const FormHelper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  .error-message {
    color: red;
  }
`;

export const FormHelperText = styled(BaseFormHelperText)`
  cursor: pointer;
`;

export const FormButton = styled(BaseStepButton)<FormButtonProps>`
  ${({ variant }) =>
    variant === 'send'
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

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 88px;
  resize: vertical;
`;

export const CharCount = styled.span`
  position: relative;
  bottom: 0;
  left: 0;
  text-align: end;
`;

export const Controls = styled(BaseControls)``;
