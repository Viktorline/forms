import React from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  StyledInputMask,
} from './styles/MainPage.styled';
import { FormInput, FormLabel } from './styles/FormInput.styled';
import { updateData } from '../features/userSlice';
import * as Yup from 'yup';

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email, phone } = useSelector(
    (state: { user: { email: string; phone: string } }) => state.user
  );

  const validationSchema = Yup.object().shape({
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
      console.log(values);
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
              <Link href='https://t.me/username'>
                <LinkIcon />
                Telegram
              </Link>
              <Link href='https://github.com/username'>
                <LinkIcon />
                GitHub
              </Link>
              <Link href='/resume.pdf'>
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
              <StyledInputMask
                type='tel'
                id='phone'
                placeholder='+ 7 (999) 999-99-99'
                onChange={formik.handleChange}
                value={formik.values.phone}
                mask='+7 (999) 999-99-99'
                className={formik.touched.phone && formik.errors.phone ? 'error' : undefined}
              />
              <FormHelperText className='error-message'>
                {formik.touched.phone && formik.errors.phone ? formik.errors.phone : ''}
              </FormHelperText>
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
