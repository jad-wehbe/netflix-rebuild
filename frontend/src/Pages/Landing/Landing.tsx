import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { addEmail } from "./landingSlice";

import logoSvg from "assets/Logo.svg";
import * as Styles from "./Landing.Styles";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "utils/Firebase";
import { emailValidation } from "utils/validation";
import handleAnonymous from "api/handleAnonymous";

function Landing() {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user && !user.isAnonymous) history.push("/Browse");
        });
        return () => unsubscribe();
    }, [history]);

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: emailValidation,

        onSubmit: (values) => {
            dispatch(addEmail(values.email));
            history.push("/SignUp");
        },
    });

    const handleClick = () => {
        handleAnonymous().then(() => history.push("/Browse"));
    };

    return (
        <>
            <Helmet>
                <title>Netflix Rebuild | Get Started</title>
            </Helmet>
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
                        <Styles.Span>Ready to watch?</Styles.Span> Enter your
                        Email:
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
                        Entering your email will create or restart your
                        membership
                    </Styles.Terms>
                    <Styles.Guest onClick={handleClick}>
                        Continue as a Guest
                    </Styles.Guest>
                </Styles.Main>
            </Styles.Background>
        </>
    );
}

export default Landing;
