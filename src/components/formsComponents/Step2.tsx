import React, { useEffect, useCallback } from 'react';
import { useFormik, FormikContextType } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateData } from '../../features/userSlice';
import { store } from '../../app/store';

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
  Forms,
  FormContainer,
  FormHelperText,
  Advantage,
} from '../styles/Step2.styled';

type StepProps = {
  onNext: () => void;
  onBack: () => void;
};

type FormValues = {
  advantages: { id: number; value: string }[];
  checkboxGroup: string[];
  radioGroup: string[] | string;
};

const Step2: React.FC<StepProps> = ({ onNext, onBack }) => {
  const dispatch = useDispatch();

  const { advantages, checkboxGroup, radioGroup } = useSelector(
    (state: { user: { advantages: any; checkboxGroup: string; radioGroup: string } }) => state.user
  );

  const validationSchema = Yup.object().shape({
    advantages: Yup.array()
      .of(
        Yup.object().shape({
          id: Yup.number().required(),
          value: Yup.string()
            .required('At least 1 advantage is required')
            .min(1, 'Advantage value must have at least 1 character'),
        })
      )
      .required('Advantages are required')
      .min(1, 'At least 1 advantages is required'),
    checkboxGroup: Yup.array()
      .of(Yup.string())
      .required('Checkbox group is required')
      .min(1, 'At least one checkbox should be selected'),
    radioGroup: Yup.string()
      .oneOf(['1', '2', '3'], 'Invalid radio group')
      .required('Radio group is required'),
  });

  const initializeAdvantagesField = useCallback(
    (formik: FormikContextType<FormValues>) => {
      if (advantages.length === 0) {
        formik.setFieldValue('advantages', [{ id: 1, value: '' }]);
      }
    },
    [advantages]
  );

  const formik = useFormik<FormValues>({
    initialValues: {
      advantages,
      checkboxGroup: Array.isArray(checkboxGroup) ? checkboxGroup : [],
      radioGroup: radioGroup || '',
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(store.getState());
      dispatch(updateData(values));
      onNext();
    },
  });

  useEffect(() => {
    initializeAdvantagesField(formik);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(formik.errors);

  const handleAdd = () => {
    const newAdvantage = { id: formik.values.advantages.length + 1, value: '' };
    formik.setFieldValue('advantages', [...formik.values.advantages, newAdvantage]);
  };

  const handleRemove = (id: number) => {
    const newAdvantages = formik.values.advantages.filter((advantage) => advantage.id !== id);
    formik.setFieldValue('advantages', newAdvantages);
  };

  return (
    <MainContent>
      <FormBlock onSubmit={formik.handleSubmit}>
        <Forms>
          <FormContainer>
            <FormLabel>Advantages</FormLabel>
            {formik.values.advantages.map((advantage, index) => (
              <Advantage key={index}>
                <input type='hidden' name={`advantages[${index}].id`} value={advantage.id} />
                <FormInput
                  type='text'
                  id={`field-advantages-${advantage.id}`}
                  name={`advantages[${index}].value`}
                  value={advantage.value}
                  onChange={formik.handleChange}
                  placeholder='Placeholder'
                />
                <RemoveButton
                  id={`button-remove-${advantage.id}`}
                  onClick={() => handleRemove(advantage.id)}
                >
                  Remove
                </RemoveButton>
              </Advantage>
            ))}
            {formik.values.advantages.length < 5 && (
              <FormAdvantagesButton type='button' variant='add' id='button-add' onClick={handleAdd}>
                +
              </FormAdvantagesButton>
            )}
            {formik.touched.advantages && formik.errors.advantages ? (
              <FormHelperText title='At least one checkbox should be selected' className='error'>
                Fill at least one block, and delete empty's
              </FormHelperText>
            ) : null}
          </FormContainer>

          <FormContainer>
            <FormSmallLabel>Checkbox group</FormSmallLabel>
            <CheckboxGroup>
              <Checkbox>
                <input
                  type='checkbox'
                  id='field-checkbox-group-option-1'
                  name='checkboxGroup'
                  value='1'
                  onChange={formik.handleChange}
                  checked={formik.values.checkboxGroup.includes('1')}
                />
                <label htmlFor='field-checkbox-group-option-1'>1</label>
              </Checkbox>
              <Checkbox>
                <input
                  type='checkbox'
                  id='field-checkbox-group-option-2'
                  name='checkboxGroup'
                  value='2'
                  onChange={formik.handleChange}
                  checked={formik.values.checkboxGroup.includes('2')}
                />
                <label htmlFor='field-checkbox-group-option-2'>2</label>
              </Checkbox>
              <Checkbox>
                <input
                  type='checkbox'
                  id='field-checkbox-group-option-3'
                  name='checkboxGroup'
                  value='3'
                  onChange={formik.handleChange}
                  checked={formik.values.checkboxGroup.includes('3')}
                />
                <label htmlFor='field-checkbox-group-option-3'>3</label>{' '}
              </Checkbox>
            </CheckboxGroup>
            {formik.touched.checkboxGroup && formik.errors.checkboxGroup ? (
              <FormHelperText title='At least one checkbox should be selected' className='error'>
                {formik.errors.checkboxGroup}
              </FormHelperText>
            ) : null}
          </FormContainer>

          <FormContainer>
            <FormSmallLabel>Radio group</FormSmallLabel>
            <RadioGroup>
              <Radio>
                <input
                  type='radio'
                  id='field-radio-group-option-1'
                  name='radioGroup'
                  value='1'
                  onChange={formik.handleChange}
                  checked={formik.values.radioGroup.includes('1')}
                />
                <label htmlFor='field-radio-group-option-1'>1</label>
              </Radio>
              <Radio>
                <input
                  type='radio'
                  id='field-radio-group-option-2'
                  name='radioGroup'
                  value='2'
                  onChange={formik.handleChange}
                  checked={formik.values.radioGroup.includes('2')}
                />
                <label htmlFor='field-radio-group-option-2'>2</label>
              </Radio>
              <Radio>
                <input
                  type='radio'
                  id='field-radio-group-option-3'
                  name='radioGroup'
                  value='3'
                  onChange={formik.handleChange}
                  checked={formik.values.radioGroup.includes('3')}
                />
                <label htmlFor='field-radio-group-option-3'>3</label>
              </Radio>
            </RadioGroup>
            {formik.touched.radioGroup && formik.errors.radioGroup ? (
              <FormHelperText title='At least one radio should be selected' className='error'>
                {formik.errors.radioGroup}
              </FormHelperText>
            ) : null}
          </FormContainer>
        </Forms>

        <Controls>
          <FormButton variant='back' id='button-back' type='button' onClick={onBack}>
            Previous
          </FormButton>
          <FormButton variant='forward' id='button-next' type='submit'>
            Next
          </FormButton>
        </Controls>
      </FormBlock>
    </MainContent>
  );
};

export default Step2;
