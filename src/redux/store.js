import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import todoSlice from './todos/todoSlice';

const store = configureStore({
  reducer: {
    todoSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
