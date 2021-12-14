// import { api } from "./axios";
import { auth } from "utils/Firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

interface User {
    username: string;
    email: string;
    password: string;
}

export const handleRegister = async (user: User) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            user.email,
            user.password
        );
        // Signed in
        const newUser = userCredential.user;
        await updateProfile(newUser, { displayName: user.username });
        console.log(newUser);
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code: " + errorCode);
        console.log("Error message: " + errorMessage);
    }
};
