import { useNavigate } from 'react-router-dom';

type StepProps = {
  onNext: () => void;
};

const Step1: React.FC<StepProps> = ({ onNext }) => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <div>
      <button onClick={goToMainPage}>Go to Main Page</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Step1;
