import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import rootReducer from '../reducers/index';

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: rootReducer,
  },
});
