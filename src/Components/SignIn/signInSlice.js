import { createSlice } from "@reduxjs/toolkit";

export const signInSlice = createSlice({
    name: "Sign In",
    initialState: {
        email: "",
        password: "",
    },
    reducers: {
        checkEmail: (state, action) => {
            state.email = action.payload.email;
        },

        checkPassword: (state, action) => {
            state.password = action.payload.password;
        },
    },
});

export const { checkEmail, checkPassword } = signInSlice.actions;

export default signInSlice.reducer;
