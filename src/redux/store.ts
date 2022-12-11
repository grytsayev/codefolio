import { useDispatch } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import projectSlice from './slices/projectslice';

export const store = configureStore({
  reducer: {
    project: projectSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
