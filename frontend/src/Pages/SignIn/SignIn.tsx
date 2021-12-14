// import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import logoSvg from "assets/Logo.svg";
import * as Styles from "./SignIn.styles";

import { signInValidation } from "utils/validation";
import { handleLogin } from "api/handleLogin";
import { useAppDispatch } from "app/hooks";

function SignIn() {
    // const [redirect, setRedirect] = useState(false);

    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signInValidation,

        onSubmit: (values) => {
            console.log(JSON.stringify(values, null, 2));

            handleLogin(values, dispatch);

            // setRedirect(true);
            formik.resetForm();
        },
    });

    // const isUser = useAppSelector((state) => state.signIn.isUser);

    // if (isUser && redirect) return <Redirect to="/browse" />;

    return (
        <Styles.Background>
            <Styles.Header>
                <Link to="/">
                    <Styles.Logo src={logoSvg} />
                </Link>
            </Styles.Header>
            <Styles.Form onSubmit={formik.handleSubmit}>
                <Styles.Container>
                    <Styles.H2>Sign In</Styles.H2>

                    {formik.touched.email && formik.errors.email ? (
                        <Styles.Error>{formik.errors.email}</Styles.Error>
                    ) : null}

                    <Styles.Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email Address"
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

                    <Styles.SignInButton type="submit">
                        SignIn
                    </Styles.SignInButton>
                    <Styles.ForgetPassword>
                        <Link to="#">Forget Password?</Link>
                    </Styles.ForgetPassword>
                    <Styles.Paragraph>
                        New to Netflix?
                        <Styles.Span>
                            <Link to="/SignUp">Sign Up Now</Link>
                        </Styles.Span>
                    </Styles.Paragraph>
                </Styles.Container>
            </Styles.Form>
        </Styles.Background>
    );
}

export default SignIn;