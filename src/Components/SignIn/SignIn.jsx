import React from "react";
import { Link } from "react-router-dom";

import {
    BackgroundGradient,
    Background,
} from "Components/Landing/Landing.Styles";

import { Header, Logo, Form, H2, Label, Input } from "./SignIn.styles";

import logoSvg from "assets/Logo.svg";

function SignIn() {
    return (
        <Background>
            <BackgroundGradient>
                <Header>
                    <Link to="/">
                        <Logo src={logoSvg} />
                    </Link>
                </Header>
                <Form>
                    <H2>Sign In</H2>
                    <div className="email">
                        <Label htmlFor="email">Enter your email:</Label>
                        <Input type="email" id="email" name="email" />
                    </div>
                    <div className="password">
                        <Label htmlFor="password">Enter your password:</Label>
                        <Input type="password" id="password" name="password" />
                    </div>
                    <button type="submit">SignIn</button>
                    <br />
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember me</label>
                    <h3>
                        New to Netflix? <span>Sign Up Now</span>
                    </h3>
                </Form>
            </BackgroundGradient>
        </Background>
    );
}

export default SignIn;
