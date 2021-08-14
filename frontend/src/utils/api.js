import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000/",
});

// Handle register
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

export default api;
