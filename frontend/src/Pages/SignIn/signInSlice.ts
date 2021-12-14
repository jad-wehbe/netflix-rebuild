import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface signInState {
    user: string | null;
    isFetching: boolean;
    isUser: boolean;
    error: boolean;
}

const initialState: signInState = {
    // user: JSON.parse(localStorage.getItem("user")) || null,
    user: null,
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

        loginSuccess: (state, action: PayloadAction<string | null>) => {
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
