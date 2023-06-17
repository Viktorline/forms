import styled from 'styled-components';

type StepProps = {
  number: number;
  activeStep: number;
};

type SliderProps = {
  activeStep: number;
};

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 62px;
  margin-bottom: 14px;
`;

export const Slider = styled.div<SliderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 680px;
  width: 680px;

  &::before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: ${({ activeStep }) => (activeStep === 1 ? '0%' : activeStep === 2 ? '50%' : '99%')};
    height: 8px;
    background: #5558fa;
    z-index: 1;
    border-radius: 25px;
    transition: width 0.3s ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 99%;
    height: 8px;
    background: #000000;
    opacity: 0.08;
    z-index: 1;
    border-radius: 25px;
    transition: width 0.3s ease-in-out;
  }
`;

export const Step = styled.div<StepProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ activeStep, number }) => (activeStep >= number ? '#5558fa' : '#a6a6a6')};
  z-index: 2;
  position: relative;

  &:after {
    content: '${({ number }) => number}';
    position: absolute;
    bottom: -32px;
    left: 50%;
    font-size: 14px;
    transform: translateX(-50%);
  }

  * {
    color: white;
    position: absolute;
    bottom: 1px;
    left: 2px;
  }
`;
