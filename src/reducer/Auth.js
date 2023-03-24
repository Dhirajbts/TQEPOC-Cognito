import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: "",
    idToken: "",
};

export const cognitoAuth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getAuthenticate: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.idToken = action.payload.idToken;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getAuthenticate } = cognitoAuth.actions;

export default cognitoAuth.reducer;
