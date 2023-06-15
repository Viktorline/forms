import React from 'react';

type StepProps = {
  onNext: () => void;
  onBack?: () => void;
};

const Step2: React.FC<StepProps> = ({ onNext, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step2;
