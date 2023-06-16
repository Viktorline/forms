import styled from 'styled-components';
import { FaTrash } from 'react-icons/fa';

type FormButtonProps = {
  variant: 'back' | 'forward' | 'add' | 'delete';
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

//////////////////////////////////////////////////////

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
  margin-right: 19px;
  margin-bottom: 8px;
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
`;

export const RemoveButton = styled(FaTrash)`
  color: grey;
  width: 14px;
  height: 14px;
  margin-right: 5px;
  position: relative;
  top: 2px;
  cursor: pointer;
`;
////////////////////////////////////////////////
export const FormSmallLabel = styled.label``;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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

//////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////

export const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 39px 0;
`;
