import { configureStore } from '@reduxjs/toolkit';
import stepReducer from '../features/stepSlice';

export const store = configureStore({
  reducer: {
    step: stepReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
