import { api } from "./axios";

export const handleRegister = (user) => {
    const newUser = {
        username: user.username,
        email: user.email,
        password: user.password,
    };
    api.post("/api/auth/register", newUser)
        .then((res) => console.log(res))
        .catch((err) => {
            console.warn(err.response.data);
            alert(err.response.data);
        });
};
