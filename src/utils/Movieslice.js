import { createSlice } from "@reduxjs/toolkit"

const movieslice = createSlice({
  name: "movies",
  initialState: {
    nowplayingmovies: null,
    trailervideos: null,

  },
  reducers: {
    addnowplayingmovies: (state, action) => {
      state.nowplayingmovies = action.payload
    },
    addtrailervideo: (state, action) => {
      state.trailervideos = action.payload
    }
  }
})

export const { addnowplayingmovies, addtrailervideo } = movieslice.actions
export default movieslice.reducer
