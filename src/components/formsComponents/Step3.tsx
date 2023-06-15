import React from 'react';
type StepProps = {
  onBack: () => void;
};

const Step3: React.FC<StepProps> = ({ onBack }) => {
  return <button onClick={onBack}>Back</button>;
};

export default Step3;
