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
  /* height: 100%; */
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
        `
      : `
          background-color: white;
          color: #5558fa;
          border: 2px solid #5558fa;
        `}
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

  /* margin-bottom: 27px; */
`;
export const FormHelper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;

  .error {
    border-color: red;
  }

  .error-message {
    color: red;
  }
`;

export const Forms = styled.div`
  margin-bottom: 0px;
`;
