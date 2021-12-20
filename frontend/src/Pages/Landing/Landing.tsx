import { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addEmail } from "./landingSlice";

import logoSvg from "assets/Logo.svg";
import * as Styles from "./Landing.Styles";

import { emailValidation } from "utils/validation";

function Landing() {
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: emailValidation,

        onSubmit: (values) => {
            // console.log(JSON.stringify(values, null, 2));
            dispatch(addEmail(values.email));
            setRedirect(true);
        },
    });

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

                {formik.touched.email && formik.errors.email ? (
                    <Styles.Error>{formik.errors.email}</Styles.Error>
                ) : null}

                <Styles.SignUp onSubmit={formik.handleSubmit}>
                    <Styles.Input
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
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
