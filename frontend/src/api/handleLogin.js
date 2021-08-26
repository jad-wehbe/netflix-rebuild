import { api } from "./axios";

export const handleLogin = (user) => {
    api.post("/api/auth/login", user)
        .then((res) => {
            console.log(res);
            localStorage.setItem("authToken", res.data.accessToken);
        })
        .catch((err) => {
            console.warn(err.response.data);
            alert(err.response.data);
        });
};
