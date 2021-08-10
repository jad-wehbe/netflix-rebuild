import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmail } from "./landingSlice";

import * as Styles from "./Landing.Styles";

import logoSvg from "assets/Logo.svg";

function Landing() {
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false);

    // const emailState = useSelector((state) => state.email.value);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addEmail(email));
        setEmail("");
        setRedirect(true);
    };

    if (redirect) {
        return <Redirect to="/SignUp" />;
    }

    return (
        <Styles.Background>
            <Styles.Header>
                <Styles.Logo src={logoSvg} alt="Logo" />
                <Link to="/SignIn">
                    <Styles.SignInButton>Sign In</Styles.SignInButton>
                </Link>
            </Styles.Header>
            <Styles.Main>
                <Styles.Title>
                    Unlimited movies, TV shows, and more.
                </Styles.Title>
                <Styles.SubTitle>
                    Watch anywhere. Cancel anytime
                </Styles.SubTitle>
                <Styles.Paragraph>
                    <Styles.Span>Ready to watch?</Styles.Span> Enter your Email:
                </Styles.Paragraph>
                {/* TODO: Put a label and animations */}
                <Styles.SignUp onSubmit={handleSubmit}>
                    <Styles.Input
                        required
                        type="email"
                        placeholder="Email Address"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        value={email}
                    />
                    <Styles.SignUpButton type="submit">
                        Get Started &gt;
                    </Styles.SignUpButton>
                </Styles.SignUp>
                <Styles.Terms>
                    Entering your email will create or restart your membership
                </Styles.Terms>
                <Styles.Guest as="a" href="#">
                    Continue as a Guest
                </Styles.Guest>
            </Styles.Main>
        </Styles.Background>
    );
}

export default Landing;
