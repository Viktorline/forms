import * as Yup from 'yup';

export const step1ValidationSchema = Yup.object().shape({
  nickname: Yup.string()
    .max(30, 'Nickname must be at most 30 characters long')
    .matches(/^[a-zA-Z0-9]+$/, 'Nickname can only contain letters and numbers')
    .required('Nickname is required'),
  name: Yup.string()
    .max(50, 'Name must be at most 50 characters long')
    .matches(/^[a-zA-Z]+$/, 'Name can only contain letters')
    .required('Name is required'),
  surname: Yup.string()
    .max(50, 'Surname must be at most 50 characters long')
    .matches(/^[a-zA-Z]+$/, 'Surname can only contain letters')
    .required('Surname is required'),
  sex: Yup.string().oneOf(['man', 'woman'], 'Invalid sex').required('Sex is required'),
});

export const step2ValidationSchema = Yup.object().shape({
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

export const step3ValidationSchema = Yup.object().shape({
  about: Yup.string().required('About is required').max(200, 'Maximum length 200 characters'),
});

export const mainPageValidationSchema = Yup.object({
  phone: Yup.string()
    .matches(
      /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
      'Phone number must be in the format: +7 (900) 000-00-00'
    )
    .required('Phone number is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});
