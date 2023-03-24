import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/index";
import authReducer from "../reducer/Auth";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});
