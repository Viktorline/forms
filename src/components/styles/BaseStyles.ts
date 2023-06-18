import styled from 'styled-components';

export const BaseButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 79px;
  height: 44px;
`;

export const BaseFormBlock = styled.form`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  width: 100%;
  margin-bottom: 23px;
`;

export const BaseFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0px;

  .error {
    border-color: red;
  }

  .error-message {
    color: red;
  }
`;

export const BaseFormHelperText = styled.p`
  line-height: 1;
  font-size: 11px;
`;

export const BaseFormLabel = styled.label`
  margin-bottom: 7px;
`;

export const BaseForms = styled.div`
  margin-bottom: 23px;
`;

export const BaseInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  max-width: 400px;
  height: 44px;
`;

export const BaseMainContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 24px 110px;

  @media (max-width: 550px) {
    padding: 24px 50px;
  }
`;

export const BaseStepButton = styled.button`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 73px;
  height: 44px;

  &:active {
    background-color: #2c2e8c;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  margin: 24px auto 0;
  background-color: #ffffff;
  border-radius: 12px;
`;

export const BaseControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 39px 0;
`;
