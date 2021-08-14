import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/",
});

// Register
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
            alert(
                err.response.data +
                    "\nPlease go to sign In page or create a new account using different email"
            );
        });
};

// Sign In
export const handleLogin = (user) => {
    api.post("http://localhost:5000/api/auth/login", user)
        .then((res) => {
            console.log(res);
            localStorage.setItem("authToken", res.data.accessToken);
        })
        .catch((err) => {
            console.warn(err.response.data);
            alert(err.response.data);
        });
};
