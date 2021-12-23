import { signInAnonymously } from "firebase/auth";
import { auth } from "utils/Firebase";

const handleAnonymous = async () => {
    try {
        return await signInAnonymously(auth);
    } catch (error: any) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error code: " + errorCode);
        console.error("Error message: " + errorMessage);
    }
};

export default handleAnonymous;
