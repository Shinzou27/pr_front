import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import callReducer from '../features/call/callSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    call: callReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
