import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "Pages/Landing/landingSlice";

export const store = configureStore({
    reducer: {
        email: landingReducer,
    },
});
