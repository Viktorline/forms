import { createSlice } from '@reduxjs/toolkit';

const initialState: number = 1;

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    nextStep: (state) => state + 1,
    previousStep: (state) => (state > 1 ? state - 1 : state),
    resetStep: () => initialState,
  },
});

export const { nextStep, previousStep, resetStep } = stepSlice.actions;

export const selectStep = (state: { step: number }) => state.step;

export default stepSlice.reducer;
