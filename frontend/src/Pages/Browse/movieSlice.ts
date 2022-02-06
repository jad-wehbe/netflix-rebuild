import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieInterface } from "api/requests";

interface movieState {
    movie?: MovieInterface;
    popup: boolean;
}

const initialState: movieState = {
    movie: undefined,
    popup: false,
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: (state, action: PayloadAction<MovieInterface>) => {
            state.movie = action.payload;
        },
        resetMovie: (state) => {
            state.movie = undefined;
            state.popup = false;
        },
        showPopup: (state) => {
            state.popup = true;
        },
    },
});

export const { setMovie, resetMovie, showPopup } = movieSlice.actions;

export default movieSlice.reducer;
