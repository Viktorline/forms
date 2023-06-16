import styled from 'styled-components';

type StepProps = {
  number: number;
};

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 62px;
  margin-bottom: 14px;
`;

export const Slider = styled.div`
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
    right: 4px;
    height: 8px;
    background: #000000;
    opacity: 0.2;
    z-index: 1;
    border-radius: 100px;
  }
`;

export const Step = styled.div<StepProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #a6a6a6;
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
`;
