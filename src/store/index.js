import { configureStore } from '@reduxjs/toolkit';
import artistReducer from '../artist/slice/artistSlice';

export const store = configureStore({
  reducer: artistReducer,
});