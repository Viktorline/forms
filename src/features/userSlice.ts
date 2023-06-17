import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  phone: '',
  nickname: '',
  name: '',
  surname: '',
  sex: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.nickname = action.payload.nickname;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.sex = action.payload.sex;
    },
  },
});

export const { updateData } = userSlice.actions;

export default userSlice.reducer;
