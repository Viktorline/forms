import styled from 'styled-components';

type FormButtonProps = {
  variant: 'back' | 'forward';
};

export const MainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 24px 110px;
  color: #333333;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  margin-bottom: 23px;
`;

export const FormLabel = styled.label`
  margin-bottom: 7px;
`;

export const FormInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  height: 44px;
`;

export const FormHelperText = styled.p`
  line-height: 1;
  font-size: 11px;
  margin-bottom: 27px;
`;

export const FormSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 300px;
  height: 44px;
  background-color: white;
  color: #333333;

  option {
    background: white;
    font-size: 14px;
    color: #333333;
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 39px 0;
`;

export const FormButton = styled.button<FormButtonProps>`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 73px;
  height: 44px;

  ${({ variant }) =>
    variant === 'forward'
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