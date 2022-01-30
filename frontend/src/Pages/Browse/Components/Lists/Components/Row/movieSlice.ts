import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { ResultType } from 'api/requests';

interface movieState {
    movie?: ResultType
    popup: boolean
}

const initialState: movieState = {
    movie: undefined,
    popup: false,
}

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovie: (state, action: PayloadAction<ResultType>) => {
            state.movie = action.payload;
        },
        showPopup: (state) => {
            state.popup = true;
        }
    }
})

export const { setMovie, showPopup } = movieSlice.actions

export default movieSlice.reducer