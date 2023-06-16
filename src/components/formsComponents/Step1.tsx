import { useNavigate } from 'react-router-dom';
import {
  FormBlock,
  MainContent,
  FormInput,
  FormLabel,
  FormHelperText,
  FormSelect,
  FormButton,
  Controls,
} from '../styles/Step1.styled';

type StepProps = {
  onNext: () => void;
};

const Step1: React.FC<StepProps> = ({ onNext }) => {
  const navigate = useNavigate();

  const goToMainPage = () => {
    navigate('/');
  };

  return (
    <MainContent>
      <FormBlock>
        <FormLabel htmlFor='field-nickname'>Nickname</FormLabel>
        <FormInput type='text' id='field-nickname' placeholder='Placeholder' />
        <FormHelperText>Tip</FormHelperText>

        <FormLabel htmlFor='field-name'>Name</FormLabel>
        <FormInput type='text' id='field-name' placeholder='Placeholder' />
        <FormHelperText>Tip</FormHelperText>

        <FormLabel htmlFor='field-surname'>Surname</FormLabel>
        <FormInput type='text' id='field-surname' placeholder='Placeholder' />
        <FormHelperText>Tip</FormHelperText>

        <FormLabel htmlFor='field-sex'>Sex</FormLabel>
        <FormSelect id='field-sex' placeholder='Placeholder'>
          <option id='field-sex-option-null' value='null'>
            Не выбрано
          </option>
          <option id='field-sex-option-man' value='man'>
            man
          </option>
          <option id='field-sex-option-woman' value='woman'>
            woman
          </option>
        </FormSelect>
        <FormHelperText>Tip</FormHelperText>

        <Controls>
          <FormButton variant='back' id='button-back' onClick={goToMainPage}>
            Назад
          </FormButton>
          <FormButton variant='forward' id='button-next' onClick={onNext}>
            Далее
          </FormButton>
        </Controls>
      </FormBlock>
    </MainContent>
  );
};

export default Step1;
