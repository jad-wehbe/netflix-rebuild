import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface signInState {
    user: string | null;
    error: boolean;
}

const initialState: signInState = {
    // user: JSON.parse(localStorage.getItem("user")) || null,
    user: null,
    error: false,
};

export const signInSlice = createSlice({
    name: "signIn",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.user = null;
            state.error = false;
        },

        loginSuccess: (state, action: PayloadAction<string | null>) => {
            state.user = action.payload;
            state.error = false;
        },

        loginFailure: (state) => {
            state.user = null;
            state.error = true;
        },
    },
});

export const { loginStart, loginSuccess, loginFailure } = signInSlice.actions;

export default signInSlice.reducer;
