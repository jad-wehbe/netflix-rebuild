import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
    name: "Sign Up",
    initialState: {
        newEmail: "",
        newPassword: "",
    },
    reducers: {
        addEmail: (state, action) => {
            state.newEmail = action.payload.email;
        },

        addPassword: (state, action) => {
            state.newPassword = action.payload.password;
        },
    },
});

export const { addEmail, addPassword } = signUpSlice.actions;

export default signUpSlice.reducer;
