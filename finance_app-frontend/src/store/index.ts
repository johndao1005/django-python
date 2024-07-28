// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './login.action';

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
