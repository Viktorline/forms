import { createSlice } from '@reduxjs/toolkit';

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

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateData: (state, action) => {
      if (action.payload.email !== undefined) state.email = action.payload.email;
      if (action.payload.phone !== undefined) state.phone = action.payload.phone;
      if (action.payload.nickname !== undefined) state.nickname = action.payload.nickname;
      if (action.payload.name !== undefined) state.name = action.payload.name;
      if (action.payload.surname !== undefined) state.surname = action.payload.surname;
      if (action.payload.sex !== undefined) state.sex = action.payload.sex;
      if (action.payload.advantages !== undefined) state.advantages = action.payload.advantages;
      if (action.payload.checkboxGroup !== undefined)
        state.checkboxGroup = action.payload.checkboxGroup;
      if (action.payload.radioGroup !== undefined) state.radioGroup = action.payload.radioGroup;
      if (action.payload.about !== undefined) state.about = action.payload.about;
    },
  },
});

export const { updateData } = userSlice.actions;

export default userSlice.reducer;
