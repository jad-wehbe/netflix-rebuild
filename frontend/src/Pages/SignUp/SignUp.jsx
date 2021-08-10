import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signUpValidation } from "../../utils/validation";
// import { useFormik } from "formik";
// import * as Yup from "yup";

import { addName, addEmail, addPassword } from "Pages/SignUp/signUpSlice";

import * as Styles from "./SignUp.styles";

import logoSvg from "assets/Logo.svg";

function SignUp() {
    const dispatch = useDispatch();

    const initialState = {
        username: "",
        email: "",
        password: "",
        verify: "",
    };

    const [{ username, email, password, verify }, setState] =
        useState(initialState);

    const clearState = () => {
        setState({ ...initialState });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleBlur = (event) => {
        const { name, value } = event.target;
        console.log({ [name]: value });

        // console.log(signUpValidation({ [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = { username, email, password };
        console.log(signUpValidation(payload));

        // dispatch(addName(payload));
        // dispatch(addEmail(payload));
        // dispatch(addPassword(payload));

        clearState();
    };

    // Check if we have an email entered in Landing page
    const emailState = useSelector((state) => state.email.email);

    useEffect(() => {
        setState((prevState) => ({ ...prevState, email: emailState }));
    }, [emailState]);

    // const formik = useFormik({
    //     initialValues: {
    //         name: "",
    //         email: "",
    //         password: "",
    //         verifyPassword: "",
    //     },
    //     validationSchema: Yup.object({
    //         name: Yup.string()
    //             .min(3, "Name must be more than 3 characters")
    //             .required("Required"),
    //         email: Yup.string()
    //             .email("Invalid email address")
    //             .required("Required"),
    //         password: Yup.string()
    //             .min(8, "Password must Contain at least 8 Characters")
    //             .required("Required"),
    //         verifyPassword: Yup.string().oneOf(
    //             [Yup.ref("password"), null],
    //             "Passwords must match"
    //         ),
    //     }),
    //     onSubmit: (values) => {
    //         formik.resetForm();
    //         alert(JSON.stringify(values, null, 2));
    //     },
    // });

    // console.log(email);
    return (
        <Styles.Background>
            <Styles.BackgroundGradient>
                <Styles.Header>
                    <Link to="/">
                        <Styles.Logo src={logoSvg} />
                    </Link>
                </Styles.Header>
                <Styles.Form onSubmit={handleSubmit}>
                    <Styles.Container>
                        <Styles.H2>Sign Up</Styles.H2>
                        <Styles.Input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="First Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={username}
                        />
                        {/* {formik.touched.name && formik.errors.name ? (
                            <Styles.Error>{formik.errors.name}</Styles.Error>
                        ) : null} */}

                        <Styles.Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={email}
                        />

                        {/* {formik.touched.email && formik.errors.email ? (
                            <Styles.Error>{formik.errors.email}</Styles.Error>
                        ) : null} */}

                        <Styles.Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={password}
                        />

                        {/* {formik.touched.password && formik.errors.password ? (
                            <Styles.Error>
                                {formik.errors.password}
                            </Styles.Error>
                        ) : null} */}

                        <Styles.Input
                            id="verify"
                            name="verify"
                            type="password"
                            placeholder="Verify Password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={verify}
                        />

                        {/* {formik.touched.verifyPassword &&
                        formik.errors.verifyPassword ? (
                            <Styles.Error>
                                {formik.errors.verifyPassword}
                            </Styles.Error>
                        ) : null} */}

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
            </Styles.BackgroundGradient>
        </Styles.Background>
    );
}

export default SignUp;
