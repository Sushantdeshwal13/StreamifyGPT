import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userslice'; 
import moviesreducer from './Movieslice'; // Import the movieslice reducer
import gptreducer from './gptslice'; // Import the gptslice reducer
import configreducer from './configslice'; // Import the configslice reducer

const appstore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesreducer, 
    gpt: gptreducer, // Add the gptslice reducer
    config: configreducer,
  },
});

export default appstore;
// This file sets up a Redux store for your application.
// You can add reducers to manage your application's state.