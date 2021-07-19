import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "Pages/Landing/landingSlice";
import signInSlice from "Pages/SignIn/signInSlice";
import signUpSlice from "Pages/SignUp/signUpSlice";

export const store = configureStore({
    reducer: {
        email: landingReducer,
        signIn: signInSlice,
        signUp: signUpSlice,
    },
});
