import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "Pages/Browse/movieSlice";
import landingReducer from "Pages/Landing/landingSlice";
import signInSlice from "Pages/SignIn/signInSlice";

export const store = configureStore({
    reducer: {
        email: landingReducer,
        signIn: signInSlice,
        movie: movieSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
