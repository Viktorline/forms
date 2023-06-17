import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep, selectStep } from '../features/stepSlice';
import { FaCheck } from 'react-icons/fa';

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
        <Slider activeStep={step}>
          <Step activeStep={step} number={1}>
            {step >= 2 && <FaCheck size={12} />}
          </Step>
          <Step activeStep={step} number={2}>
            {step >= 3 && <FaCheck size={12} />}
          </Step>
          <Step activeStep={step} number={3}></Step>
        </Slider>
      </SliderWrapper>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onBack={handlePrevious} />}
      {step === 3 && <Step3 onBack={handlePrevious} />}
    </Wrapper>
  );
};
export default CreatePage;
