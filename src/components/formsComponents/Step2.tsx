import React, { useState } from 'react';

import {
  FormBlock,
  MainContent,
  FormInput,
  FormLabel,
  FormButton,
  Controls,
  RemoveButton,
  FormAdvantagesButton,
  CheckboxGroup,
  Checkbox,
  FormSmallLabel,
  RadioGroup,
  Radio,
} from '../styles/Step2.styled';

type StepProps = {
  onNext: () => void;
  onBack: () => void;
};

const Step2: React.FC<StepProps> = ({ onNext, onBack }) => {
  const [advantages, setAdvantages] = useState([
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
  ]);

  const handleAdd = () => {
    const newAdvantage = { id: advantages.length + 1, value: '' };
    setAdvantages([...advantages, newAdvantage]);
  };

  const handleRemove = (id: number) => {
    const newAdvantages = advantages.filter((advantage) => advantage.id !== id);
    setAdvantages(newAdvantages);
  };

  return (
    <MainContent>
      <FormBlock>
        <FormLabel>Advantages</FormLabel>
        {advantages.map((advantage) => (
          <div key={advantage.id}>
            <FormInput
              type='text'
              id={`field-advantages-${advantage.id}`}
              placeholder='Placeholder'
            />
            <RemoveButton
              id={`button-remove-${advantage.id}`}
              onClick={() => handleRemove(advantage.id)}
            >
              Remove
            </RemoveButton>
          </div>
        ))}
        {advantages.length < 5 && (
          <FormAdvantagesButton variant='add' id='button-add' onClick={handleAdd}>
            +
          </FormAdvantagesButton>
        )}
        <FormSmallLabel>Checkbox group</FormSmallLabel>
        <CheckboxGroup>
          <Checkbox>
            <input
              type='checkbox'
              id='field-checkbox-group-option-1'
              name='checkbox-group'
              value='option1'
            />
            <label htmlFor='field-checkbox-group-option-1'>1</label>
          </Checkbox>
          <Checkbox>
            {' '}
            <input
              type='checkbox'
              id='field-checkbox-group-option-2'
              name='checkbox-group'
              value='option2'
            />
            <label htmlFor='field-checkbox-group-option-2'>2</label>{' '}
          </Checkbox>
          <Checkbox>
            <input
              type='checkbox'
              id='field-checkbox-group-option-3'
              name='checkbox-group'
              value='option3'
            />
            <label htmlFor='field-checkbox-group-option-3'>3</label>{' '}
          </Checkbox>
        </CheckboxGroup>
        <FormSmallLabel>Radio group</FormSmallLabel>
        <RadioGroup>
          <Radio>
            <input
              type='radio'
              id='field-radio-group-option-1'
              name='radio-group'
              value='option1'
            />
            <label htmlFor='field-radio-group-option-1'>1</label>
          </Radio>
          <Radio>
            <input
              type='radio'
              id='field-radio-group-option-2'
              name='radio-group'
              value='option2'
            />
            <label htmlFor='field-radio-group-option-2'>2</label>
          </Radio>
          <Radio>
            <input
              type='radio'
              id='field-radio-group-option-3'
              name='radio-group'
              value='option3'
            />
            <label htmlFor='field-radio-group-option-3'>3</label>
          </Radio>
        </RadioGroup>
        <Controls>
          <FormButton variant='back' id='button-back' onClick={onBack}>
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

export default Step2;
