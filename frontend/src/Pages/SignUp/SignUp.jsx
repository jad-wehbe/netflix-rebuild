import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import { addName, addEmail, addPassword } from "Pages/SignUp/signUpSlice";

import logoSvg from "assets/Logo.svg";
import * as Styles from "./SignUp.styles";

import { signUpValidation } from "../../utils/validation";

function SignUp() {
    const [exist, setExist] = useState(false);
    const dispatch = useDispatch();

    // Check if we have an email entered in Landing page
    const emailState = useSelector((state) => state.email.email);

    useEffect(() => {
        if (emailState) {
            setExist(true);
        }
    }, [emailState, exist]);

    const formik = useFormik({
        initialValues: {
            username: "",
            email: emailState,
            password: "",
            verifyPassword: "",
        },
        validationSchema: signUpValidation,

        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));

            dispatch(addName(values));
            dispatch(addEmail(values));
            dispatch(addPassword(values));

            formik.resetForm();
        },
    });
    return (
        <Styles.Background>
            <Styles.Header>
                <Link to="/">
                    <Styles.Logo src={logoSvg} />
                </Link>
            </Styles.Header>
            <Styles.Form onSubmit={formik.handleSubmit}>
                <Styles.Container>
                    <Styles.H2>Sign Up</Styles.H2>

                    {formik.touched.username && formik.errors.username ? (
                        <Styles.Error>{formik.errors.username}</Styles.Error>
                    ) : null}

                    <Styles.Input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="First Name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                    />

                    {formik.touched.email && formik.errors.email ? (
                        <Styles.Error>{formik.errors.email}</Styles.Error>
                    ) : null}

                    <Styles.Input
                        exist={exist}
                        disabled={exist}
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />

                    {formik.touched.password && formik.errors.password ? (
                        <Styles.Error>{formik.errors.password}</Styles.Error>
                    ) : null}

                    <Styles.Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />

                    {formik.touched.verifyPassword &&
                    formik.errors.verifyPassword ? (
                        <Styles.Error>
                            {formik.errors.verifyPassword}
                        </Styles.Error>
                    ) : null}

                    <Styles.Input
                        id="verifyPassword"
                        name="verifyPassword"
                        type="password"
                        placeholder="Verify Password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.verifyPassword}
                    />

                    <Styles.SignInButton type="submit">
                        Sign Up
                    </Styles.SignInButton>

                    <Styles.Paragraph>
                        Already have an account?
                        <Styles.Span>
                            <Link to="/SignIn">Sign In Now</Link>
                        </Styles.Span>
                    </Styles.Paragraph>
                </Styles.Container>
            </Styles.Form>
        </Styles.Background>
    );
}

export default SignUp;
