import { api } from "./axios";
import { isUser } from "Pages/SignIn/signInSlice";

export const verifyToken = async (token, dispatch) => {
    try {
        const res = await api.get("/api/auth/verify", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        res.status === 200 ? dispatch(isUser(true)) : dispatch(isUser(false));

        console.log(res);
    } catch (err) {
        console.log(err);
    }
};
