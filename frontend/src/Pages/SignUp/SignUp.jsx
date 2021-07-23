import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addName, addEmail, addPassword } from "Pages/SignUp/signUpSlice";

import { BackgroundGradient, Background } from "Pages/Landing/Landing.Styles";

import {
    Header,
    Logo,
    Form,
    H2,
    Input,
    Container,
    SignInButton,
    Paragraph,
    Span,
} from "./SignUp.styles";

import logoSvg from "assets/Logo.svg";

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = { name, email, password };

        dispatch(addName(payload));
        dispatch(addEmail(payload));
        dispatch(addPassword(payload));

        setEmail("");
        setPassword("");
    };

    // Check if we have an email entered in Landing page
    const emailState = useSelector((state) => state.email.email);

    useEffect(() => {
        setEmail(emailState);
    }, [emailState]);

    // console.log(email);
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
                        <H2>Sign Up</H2>
                        <Input
                            required
                            minLength={3}
                            type="text"
                            placeholder="First Name"
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                        />
                        <Input
                            required
                            minLength={6}
                            type="email"
                            placeholder="Email"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                        />
                        <Input
                            required
                            min={6}
                            type="password"
                            placeholder="Password"
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            value={password}
                        />

                        <SignInButton type="submit">Sign Up</SignInButton>
                        <Paragraph>
                            Already have an account?
                            <Span>
                                <Link to="/SignIn">Sign In Now</Link>
                            </Span>
                        </Paragraph>
                    </Container>
                </Form>
            </BackgroundGradient>
        </Background>
    );
}

export default SignUp;
