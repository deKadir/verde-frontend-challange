import { configureStore } from '@reduxjs/toolkit';
import postReducer from './postReducer';

export default configureStore({
  reducer: {
    postReducer,
  },
});
