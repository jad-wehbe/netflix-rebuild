import { api } from "./axios";
import {
    loginFailure,
    loginStart,
    loginSuccess,
} from "Pages/SignIn/signInSlice";
import { verifyToken } from "./verifyToken";

export const handleLogin = async (user, dispatch) => {
    dispatch(loginStart());

    try {
        const res = await api.post("/api/auth/login", user);
        dispatch(loginSuccess(res.data.username));
        localStorage.setItem("authToken", res.data.accessToken);

        // verify token
        const token = localStorage.getItem("authToken");
        verifyToken(token, dispatch);
    } catch (err) {
        dispatch(loginFailure());
        console.warn(err.response.data);
        alert(err.response.data);
    }
};
