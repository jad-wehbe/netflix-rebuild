import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "Components/Landing/landingSlice";
import signInSlice from "Components/SignIn/signInSlice";
import signUpSlice from "Components/SignUp/signUpSlice";

export const store = configureStore({
    reducer: {
        email: landingReducer,
        signIn: signInSlice,
        signUp: signUpSlice,
    },
});
