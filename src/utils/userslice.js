import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: "userslice",
    initialState:null,
    reducers:{
        adduser: (state, action) => {
            return action.payload;
        },
        removeuser: (state) => { 
            return null;
        }
    }
})

export const { adduser, removeuser } = userslice.actions;
export default userslice.reducer;