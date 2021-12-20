import { signInWithEmailAndPassword } from "firebase/auth";
import {
    loginFailure,
    loginStart,
    loginSuccess,
} from "Pages/SignIn/signInSlice";
import { auth } from "utils/Firebase";
import { Dispatch } from "react";
import { History } from "history";

interface Values {
    email: string;
    password: string;
}

const handleSignIn = async (
    values: Values,
    dispatch: Dispatch<any>,
    history: History
) => {
    dispatch(loginStart);
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            values.email,
            values.password
        );
        // Signed in
        const currentUser = userCredential.user;
        dispatch(loginSuccess(currentUser.displayName));
        return history.push("/browse");
    } catch (error: any) {
        dispatch(loginFailure);
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.error("Error code: " + errorCode);
        console.error("Error message: " + errorMessage);
    }
};

export default handleSignIn;
