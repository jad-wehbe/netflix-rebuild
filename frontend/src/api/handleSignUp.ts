import { auth } from "utils/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { History } from "history";
import { Dispatch } from "react";
import {
    loginFailure,
    loginStart,
    loginSuccess,
} from "Pages/SignIn/signInSlice";

interface Values {
    username: string;
    email: string;
    password: string;
}

export const handleSignUp = async (
    values: Values,
    dispatch: Dispatch<any>,
    history: History
) => {
    dispatch(loginStart);
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
        );
        // Signed in
        const newUser = userCredential.user;
        await updateProfile(newUser, { displayName: values.username });
        dispatch(loginSuccess(newUser.displayName));
        console.log(newUser);
        history.push("/browse");
    } catch (error: any) {
        dispatch(loginFailure);
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code: " + errorCode);
        console.log("Error message: " + errorMessage);
    }
};
