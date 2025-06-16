import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice'; 
import moviesreducer from './Movieslice'; // Import the movieslice reducer

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesreducer, // Add the movieslice reducer
  },
});

export default appstore;
// This file sets up a Redux store for your application.
// You can add reducers to manage your application's state.