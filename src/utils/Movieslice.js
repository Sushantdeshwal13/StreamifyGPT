import { createSlice } from "@reduxjs/toolkit"

const movieslice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovies: null,
    popularmovies: null,
    trailervideos: null,

  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload
    },
    addpopularmovies: (state, action) => {
      state.popularmovies = action.payload
    },
    addupcomingmovies: (state, action) => {
      state.upcomingmovies = action.payload
    },
    addtrailervideo: (state, action) => {
      state.trailervideos = action.payload
    }
  }
})

export const { addnowplayingmovies, addpopularmovies, addupcomingmovies, addtrailervideo } = movieslice.actions
export default movieslice.reducer
