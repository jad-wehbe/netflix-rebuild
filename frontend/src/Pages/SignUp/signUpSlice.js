import { createSlice } from "@reduxjs/toolkit";

export const signUpSlice = createSlice({
    name: "Sign Up",
    initialState: {
        newName: "",
        newEmail: "",
        newPassword: "",
    },
    reducers: {
        addName: (state, action) => {
            state.newName = action.payload.username;
        },

        addEmail: (state, action) => {
            state.newEmail = action.payload.email;
        },

        addPassword: (state, action) => {
            state.newPassword = action.payload.password;
        },
    },
});

export const { addName, addEmail, addPassword } = signUpSlice.actions;

export default signUpSlice.reducer;
