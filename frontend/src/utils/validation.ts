import * as Yup from "yup";

export const emailValidation = Yup.object({
    email: Yup.string()
        .min(6, "Email must be at least 6 characters")
        .email("Invalid email address")
        .required("Required"),
});

export const signInValidation = Yup.object({
    email: Yup.string()
        .min(6, "Email must be at least 6 characters")
        .email("Invalid email address")
        .required("Required"),
    password: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Required"),
});

export const signUpValidation = Yup.object({
    username: Yup.string()
        .min(3, "Name must be more than 3 characters")
        .lowercase()
        .required("Required")
        .matches(/^[a-z ,.'-]+$/i, "Is not in correct format"),
    email: Yup.string()
        .min(6, "Email must be at least 6 characters")
        .email("Invalid email address")
        .required("Required"),
    password: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Required"),
    verifyPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
