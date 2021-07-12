import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "Components/Landing/landingSlice";

export const store = configureStore({
    reducer: {
        email: landingReducer,
    },
});
