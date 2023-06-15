import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nextStep, previousStep, selectStep } from '../features/stepSlice';
import Step1 from './formsComponents/Step1';
import Step2 from './formsComponents/Step2';
import Step3 from './formsComponents/Step3';

export default function CreatePage() {
  const step = useSelector(selectStep);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch(nextStep());
  };

  const handlePrevious = () => {
    dispatch(previousStep());
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={handleNext} />}
      {step === 2 && <Step2 onNext={handleNext} onBack={handlePrevious} />}
      {step === 3 && <Step3 onBack={handlePrevious} />}
    </div>
  );
}
