import styled from 'styled-components';

type FormButtonProps = {
  variant: 'back' | 'send';
};

export const MainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 24px 110px;
  color: #333333;
`;

export const FormBlock = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  margin-bottom: 23px;
`;

//////////////////////////////////////////////////////

export const FormLabel = styled.label`
  margin-bottom: 7px;
`;

export const FormButton = styled.button<FormButtonProps>`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 73px;
  height: 44px;

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

  &:active {
    background-color: #2c2e8c;
  }
`;

/////////////////////////////////////////////////////

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 39px 0;
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

export const FormHelperText = styled.p`
  line-height: 1;
  font-size: 11px;
  cursor: pointer;
`;
export const FormHelper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  .error-message {
    color: red;
  }
`;

export const Forms = styled.div`
  margin-bottom: 0px;

  .error {
    border-color: red;
  }
`;
