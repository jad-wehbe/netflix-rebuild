import { api } from "./axios";

export const handleRegister = async (user) => {
    const newUser = {
        username: user.username,
        email: user.email,
        password: user.password,
    };
    try {
        const res = await api.post("/api/auth/register", newUser);
        console.log(res);
    } catch (err) {
        console.warn(err.response.data);
        alert(err.response.data);
    }
};
