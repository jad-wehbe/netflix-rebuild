import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
    name: "Sign In",
    initialState: {
        email: "",
        password: "",
    },
    reducers: {
        signInEmail: (state, action) => {
            state.email = action.payload.email;
        },

        signInPassword: (state, action) => {
            state.password = action.payload.password;
        },
    },
});

export const { signInEmail, signInPassword } = signInSlice.actions;

export default signInSlice.reducer;
