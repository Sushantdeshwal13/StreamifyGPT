import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice'; 


const appstore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default appstore;
// This file sets up a Redux store for your application.
// You can add reducers to manage your application's state.