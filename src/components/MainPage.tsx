import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { updateData } from '../features/userSlice';

import { Wrapper } from './styles/Wrapper.styled';
import {
  MainContent,
  ProfileBlock,
  Logo,
  Name,
  Links,
  Link,
  InfoContainer,
  LinkIcon,
  Line,
  FormBlock,
  Forms,
  FormButton,
  FormHelperText,
  FormContainer,
  FormInput,
  FormLabel,
  MaskedInput,
} from './styles/MainPage.styled';

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, phone } = useSelector(
    (state: { user: { email: string; phone: string } }) => state.user
  );

  const validationSchema = Yup.object({
    phone: Yup.string()
      .matches(
        /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
        'Phone number must be in the format: +7 (900) 000-00-00'
      )
      .required('Phone number is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      phone: phone || '',
      email: email || '',
    },
    validationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(updateData(values));
      navigate('/create');
    },
  });

  return (
    <Wrapper>
      <MainContent>
        <ProfileBlock>
          <Logo>VM</Logo>
          <InfoContainer>
            <Name>Victor Murzin</Name>
            <Links>
              <Link href='https://t.me/victor_murzzz'>
                <LinkIcon />
                Telegram
              </Link>
              <Link href='https://github.com/Viktorline'>
                <LinkIcon />
                GitHub
              </Link>
              <Link href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
                <LinkIcon />
                Resume
              </Link>
            </Links>
          </InfoContainer>
        </ProfileBlock>
        <Line />
        <FormBlock onSubmit={formik.handleSubmit}>
          <Forms>
            <FormContainer>
              <FormLabel htmlFor='phone'>Phone Number</FormLabel>
              <MaskedInput
                type='tel'
                id='phone'
                placeholder='+ 7 (999) 999-99-99'
                onChange={formik.handleChange}
                value={formik.values.phone}
                mask='+7 (999) 999-99-99'
                className={formik.touched.phone && formik.errors.phone ? 'error' : undefined}
              />
              {formik.touched.phone && formik.errors.phone && (
                <FormHelperText className='error-message'>{formik.errors.phone}</FormHelperText>
              )}
            </FormContainer>
            <FormContainer>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput
                type='email'
                id='email'
                placeholder='tim.jennings@example.com'
                onChange={formik.handleChange}
                value={formik.values.email}
                className={formik.touched.email && formik.errors.email ? 'error' : undefined}
              />
              <FormHelperText className='error-message'>
                {formik.touched.email && formik.errors.email ? formik.errors.email : ''}
              </FormHelperText>
            </FormContainer>
          </Forms>
          <FormButton type='submit' id='button-start'>
            Start
          </FormButton>
        </FormBlock>
      </MainContent>
    </Wrapper>
  );
};

export default MainPage;
