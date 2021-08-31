import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    isUser: false,
    error: false,
};

export const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.user = null;
            state.isFetching = false;
            state.error = false;
        },

        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.isFetching = false;
            state.error = false;
        },

        loginFailure: (state) => {
            state.user = null;
            state.isFetching = false;
            state.error = true;
        },

        isUser: (state, action) => {
            state.isUser = action.payload;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, isUser } =
    signInSlice.actions;

export default signInSlice.reducer;
