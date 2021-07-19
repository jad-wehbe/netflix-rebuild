import { createSlice } from "@reduxjs/toolkit";

export const landingSlice = createSlice({
    name: "landing",
    initialState: {
        email: "",
    },
    reducers: {
        addEmail: (state, action) => {
            state.email = action.payload;
            console.log(state.email);
        },
    },
});

export const { addEmail } = landingSlice.actions;

export default landingSlice.reducer;
