import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "Pages/Landing/landingSlice";
import signInSlice from "Pages/SignIn/signInSlice";

export const store = configureStore({
    reducer: {
        email: landingReducer,
        signIn: signInSlice,
    },
});
