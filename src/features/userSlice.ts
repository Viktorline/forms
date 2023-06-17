import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  phone: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.email = action.payload.email;
      state.phone = action.payload.phone;
    },
  },
});

export const { updateData } = userSlice.actions;

export default userSlice.reducer;
