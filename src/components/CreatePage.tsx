import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep, selectStep } from '../features/stepSlice';

import { Wrapper } from './styles/Wrapper.styled';
import { SliderWrapper, Slider, Step } from './styles/Stepper.styled';

import Step1 from './formsComponents/Step1';
import Step2 from './formsComponents/Step2';
import Step3 from './formsComponents/Step3';

const CreatePage = () => {
  const step = useSelector(selectStep);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrevious = () => {
    dispatch(previousStep());
  };

  return (
    <Wrapper>
      <SliderWrapper>
        <Slider>
          <Step number={1} />
          <Step number={2} />
          <Step number={3} />
        </Slider>
      </SliderWrapper>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onBack={handlePrevious} />}
      {step === 3 && <Step3 onBack={handlePrevious} />}
    </Wrapper>
  );
};
export default CreatePage;
