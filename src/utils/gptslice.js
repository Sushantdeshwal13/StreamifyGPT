import { createSlice } from "@reduxjs/toolkit"

const  gptslice =  createSlice({
    name: "gpt",
    initialState:{
        showgptsearch:false,
        movieresults:null,
        movienames: null,
    },
       reducers:{
        togglegptsearchview:(state) =>{
            state.showgptsearch = !state.showgptsearch;
        },
        
        addgptmovieresults:(state, action) => {
            const { movienames, movieresults } = action.payload;
            state.movienames = movienames;
            state.movieresults = movieresults;
        },
 },
}) 

export const { togglegptsearchview, addgptmovieresults } = gptslice.actions;
export default gptslice.reducer; 