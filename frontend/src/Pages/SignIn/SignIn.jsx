import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { checkEmail, checkPassword } from "Pages/SignIn/signInSlice";

import { Background } from "Pages/Landing/Landing.Styles";

import {
    BackgroundGradient,
    Header,
    Logo,
    Form,
    H2,
    Input,
    Container,
    SignInButton,
    ForgetPassword,
    Paragraph,
    Span,
} from "./SignIn.styles";

import logoSvg from "assets/Logo.svg";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = { email, password };

        dispatch(checkEmail(payload));
        dispatch(checkPassword(payload));

        setEmail("");
        setPassword("");
    };

    return (
        <Background>
            <BackgroundGradient>
                <Header>
                    <Link to="/">
                        <Logo src={logoSvg} />
                    </Link>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Container>
                        <H2>Sign In</H2>
                        <Input
                            required
                            type="email"
                            placeholder="Email or phone number"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                        />
                        <Input
                            required
                            type="password"
                            placeholder="Password"
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            value={password}
                        />

                        <SignInButton type="submit">SignIn</SignInButton>
                        <ForgetPassword>
                            <Link to="#">Forget Password?</Link>
                        </ForgetPassword>
                        <Paragraph>
                            New to Netflix?
                            <Span>
                                <Link to="/SignUp">Sign Up Now</Link>
                            </Span>
                        </Paragraph>
                    </Container>
                </Form>
            </BackgroundGradient>
        </Background>
    );
}

export default SignIn;
