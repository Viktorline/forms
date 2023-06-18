import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { store } from '../../app/store';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateData, sendFormData } from '../../features/userSlice';
import { AppDispatch } from '../../app/store';
import prepareFormData from '../utils/prepareFormData';

import {
  FormBlock,
  MainContent,
  FormLabel,
  FormButton,
  Controls,
  TextArea,
  FormHelper,
  CharCount,
  FormHelperText,
  Forms,
} from '../styles/Step3.styled';
import { step3ValidationSchema } from '../utils/validationSchemas';

type StepProps = {
  onBack: () => void;
};

const Step3: React.FC<StepProps> = ({ onBack }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [charCount, setCharCount] = useState(0);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    message: string;
    successful: boolean;
  }>({
    isOpen: false,
    message: '',
    successful: true,
  });

  const { about: initialAbout } = useSelector((state: { user: { about: string } }) => state.user);

  const formik = useFormik({
    initialValues: {
      about: initialAbout || '',
    },
    enableReinitialize: true,
    validationSchema: step3ValidationSchema,
    onSubmit: (values) => {
      dispatch(updateData(values));
      const data = store.getState().user;
      const finalData = prepareFormData(data);
      dispatch(sendFormData(finalData))
        .then((data) => {
          console.log(data);
          setModalState({ isOpen: true, message: 'Submitted successfully!', successful: true });
        })
        .catch((error) => {
          setModalState({ isOpen: true, message: 'Something went wrong', successful: false });
          console.error('Failed to send request:', error);
        });
    },
  });

  const handleAboutChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    formik.handleChange(event);
  };

  useEffect(() => {
    setCharCount(formik.values.about.replace(/\s+/g, '').length);
  }, [formik.values.about]);

  return (
    <MainContent>
      {modalState && (
        <Modal
          isOpen={modalState.isOpen}
          onClose={() => setModalState({ isOpen: false, message: '', successful: true })}
          message={modalState.message}
          successful={modalState.successful}
        />
      )}
      <FormBlock onSubmit={formik.handleSubmit}>
        <Forms>
          <FormLabel>About</FormLabel>
          <TextArea
            name='about'
            id='field-about'
            value={formik.values.about}
            onChange={handleAboutChange}
            onBlur={formik.handleBlur}
            placeholder='Enter something about yourself'
            className={formik.touched.about && formik.errors.about ? 'error' : undefined}
            autoComplete='off'
          />
          <FormHelper>
            <FormHelperText
              title='Maximum length 200 characters'
              className={formik.touched.about && formik.errors.about ? 'error' : undefined}
            >
              {' '}
              {formik.touched.about && formik.errors.about ? (
                <>
                  Tip <span className='error-message'>{formik.errors.about}</span>
                </>
              ) : (
                'Tip'
              )}
            </FormHelperText>
            <CharCount>{charCount}</CharCount>
          </FormHelper>
          <Controls>
            <FormButton variant='back' id='button-back' type='button' onClick={onBack}>
              Previous
            </FormButton>
            <FormButton variant='send' id='button-send' type='submit'>
              Send
            </FormButton>
          </Controls>
        </Forms>
      </FormBlock>
    </MainContent>
  );
};

export default Step3;
