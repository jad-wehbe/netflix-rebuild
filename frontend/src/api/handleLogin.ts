import { Dispatch } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
    loginFailure,
    loginStart,
    loginSuccess,
} from "Pages/SignIn/signInSlice";
import { auth } from "utils/Firebase";

interface User {
    email: string;
    password: string;
}

export const handleLogin = async (user: User, dispatch: Dispatch<any>) => {
    dispatch(loginStart());

    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            user.email,
            user.password
        );
        // Signed in
        const currentUser = userCredential.user;
        console.log(currentUser);
        dispatch(loginSuccess(currentUser.displayName));
    } catch (error: any) {
        dispatch(loginFailure);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error code: " + errorCode);
        console.error("Error message: " + errorMessage);
    }
};
