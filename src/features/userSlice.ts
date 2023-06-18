import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  email: '',
  phone: '',
  nickname: '',
  name: '',
  surname: '',
  sex: '',
  advantages: [],
  checkboxGroup: [],
  radioGroup: '',
  about: '',
};

const sendFormData = createAsyncThunk<void, any>('user/sendFormData', async (formData) => {
  try {
    const response = await axios.post(
      'https://api.sbercloud.ru/content/v1/bootcamp/frontend',
      formData
    );
    return response.data;
  } catch (error) {
    throw new Error(`${error}`);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { updateData } = userSlice.actions;

export { sendFormData };

export default userSlice.reducer;
