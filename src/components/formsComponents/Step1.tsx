import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateData } from '../../features/userSlice';
import {
  FormBlock,
  MainContent,
  FormInput,
  FormLabel,
  FormHelperText,
  FormSelect,
  FormButton,
  Controls,
  Forms,
  FormContainer,
} from '../styles/Step1.styled';
import { useFormik } from 'formik';
import { step1ValidationSchema } from '../utils/validationSchemas';

type StepProps = {
  onNext: () => void;
};

const Step1: React.FC<StepProps> = ({ onNext }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { nickname, name, surname, sex } = useSelector(
    (state: { user: { nickname: string; name: string; surname: string; sex: string } }) =>
      state.user
  );

  const goToMainPage = () => {
    navigate('/');
  };

  const formik = useFormik({
    initialValues: {
      nickname: nickname || '',
      name: name || '',
      surname: surname || '',
      sex: sex || '',
    },
    validationSchema: step1ValidationSchema,
    enableReinitialize: true,
    onSubmit: (values) => {
      dispatch(updateData(values));
      onNext();
    },
  });

  return (
    <MainContent>
      <FormBlock onSubmit={formik.handleSubmit}>
        <Forms>
          <FormContainer>
            <FormLabel htmlFor='field-nickname'>Nickname</FormLabel>
            <FormInput
              name='nickname'
              type='text'
              id='field-nickname'
              placeholder='Placeholder'
              onChange={formik.handleChange}
              value={formik.values.nickname}
              className={formik.touched.nickname && formik.errors.nickname ? 'error' : undefined}
              autoComplete='off'
            />
            <FormHelperText
              title='Nickname must be at most 30 characters long'
              className={formik.touched.name && formik.errors.name ? 'error' : undefined}
            >
              {formik.touched.nickname && formik.errors.nickname ? (
                <>
                  Tip <span className='error-message'>{formik.errors.nickname}</span>
                </>
              ) : (
                'Tip'
              )}
            </FormHelperText>
          </FormContainer>
          <FormContainer>
            <FormLabel htmlFor='field-name'>Name</FormLabel>
            <FormInput
              name='name'
              type='text'
              id='field-name'
              placeholder='Placeholder'
              onChange={formik.handleChange}
              value={formik.values.name}
              className={formik.touched.name && formik.errors.name ? 'error' : undefined}
              autoComplete='off'
            />
            <FormHelperText
              title='Name must be at most 50 characters long'
              className={formik.touched.name && formik.errors.name ? 'error' : undefined}
            >
              {formik.touched.name && formik.errors.name ? (
                <>
                  Tip <span className='error-message'>{formik.errors.name}</span>
                </>
              ) : (
                'Tip'
              )}
            </FormHelperText>
          </FormContainer>
          <FormContainer>
            <FormLabel htmlFor='field-surname'>Surname</FormLabel>
            <FormInput
              name='surname'
              type='text'
              id='field-surname'
              placeholder='Placeholder'
              onChange={formik.handleChange}
              value={formik.values.surname}
              className={formik.touched.surname && formik.errors.surname ? 'error' : undefined}
              autoComplete='off'
            />
            <FormHelperText
              title='Surname must be at most 50 characters long'
              className={formik.touched.name && formik.errors.name ? 'error' : undefined}
            >
              {formik.touched.surname && formik.errors.surname ? (
                <>
                  Tip <span className='error-message'>{formik.errors.surname}</span>
                </>
              ) : (
                'Tip'
              )}
            </FormHelperText>
          </FormContainer>
          <FormContainer>
            <FormLabel htmlFor='field-sex'>Sex</FormLabel>
            <FormSelect
              name='sex'
              id='field-sex'
              placeholder='Placeholder'
              onChange={formik.handleChange}
              value={formik.values.sex}
              className={formik.touched.sex && formik.errors.sex ? 'error' : undefined}
            >
              <option value='null'>Not choosen</option>
              <option value='man' id='field-sex-option-man'>
                man
              </option>
              <option value='woman' id='field-sex-option-woman'>
                woman
              </option>
            </FormSelect>
            <FormHelperText
              title='Required to choose'
              className={formik.touched.name && formik.errors.name ? 'error' : undefined}
            >
              {formik.touched.sex && formik.errors.sex ? (
                <>
                  Tip <span className='error-message'>{formik.errors.sex}</span>
                </>
              ) : (
                'Tip'
              )}{' '}
            </FormHelperText>
          </FormContainer>
        </Forms>
        <Controls>
          <FormButton variant='back' id='button-back' type='button' onClick={goToMainPage}>
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

export default Step1;
