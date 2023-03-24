import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nflData: [],
    soccerData: [],
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        getNfl: (state, action) => {
            state.nflData = action.payload;
        },
        getsoccer: (state, action) => {
            state.soccerData = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getNfl, getsoccer } = counterSlice.actions;

export default counterSlice.reducer;
