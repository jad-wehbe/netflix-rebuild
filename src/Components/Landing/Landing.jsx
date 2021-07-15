import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmail } from "./landingSlice";

import {
    Background,
    BackgroundGradient,
    Header,
    Logo,
    SignInButton,
    Title,
    SubTitle,
    Main,
    Paragraph,
    Span,
    SignUp,
    Input,
    SignUpButton,
    Terms,
    Guest,
} from "./Landing.Styles";

import logoSvg from "assets/Logo.svg";

function Landing() {
    const [email, setEmail] = useState("");

    // const emailState = useSelector((state) => state.email.value);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addEmail(email));
        setEmail("");
    };

    return (
        <Background>
            <BackgroundGradient>
                <Header>
                    <Logo src={logoSvg} alt="Logo" />
                    <Link to="/signIn">
                        <SignInButton>Sign In</SignInButton>
                    </Link>
                </Header>
                <Main>
                    <Title>Unlimited movies, TV shows, and more.</Title>
                    <SubTitle>Watch anywhere. Cancel anytime</SubTitle>
                    <Paragraph>
                        <Span>Ready to watch?</Span> Enter your Email:
                    </Paragraph>
                    {/* TODO: Put a label and animations */}
                    <SignUp onSubmit={handleSubmit}>
                        <Input
                            type="email"
                            placeholder="Email Address"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            value={email}
                        />
                        <SignUpButton as="a" href="#">
                            Get Started &gt;
                        </SignUpButton>
                    </SignUp>
                    <Terms>
                        Entering your email will create or restart your
                        membership
                    </Terms>
                    <Guest as="a" href="#">
                        Continue as a Guest
                    </Guest>
                </Main>
            </BackgroundGradient>
        </Background>
    );
}

export default Landing;
