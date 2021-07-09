import React from "react";

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
} from "./Styles";
import logoSvg from "assets/Logo.svg";

function Landing() {
    return (
        <Background>
            <BackgroundGradient>
                <Header>
                    <Logo>
                        <img src={logoSvg} alt="Logo" />
                    </Logo>
                    <SignInButton as="a" href="#">
                        Sign In
                    </SignInButton>
                </Header>
                <Main>
                    <Title>Unlimited movies, TV shows, and more.</Title>
                    <SubTitle>Watch anywhere. Cancel anytime</SubTitle>
                    <Paragraph>
                        <Span>Ready to watch?</Span> Enter your Email:
                    </Paragraph>
                    {/* TODO: Put a label and animations */}
                    <SignUp>
                        <Input type="email" placeholder="Email Address" />
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
