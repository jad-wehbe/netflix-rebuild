import * as Yup from "yup";

const signUpValidation = (data) => {
    const schema = Yup.object({
        name: Yup.string()
            .min(3, "Name must be more than 3 characters")
            .lowercase()
            .required("Required"),
        email: Yup.string()
            .min(6)
            .email("Invalid email address")
            .required("Required"),
        password: Yup.string()
            .min(8, "Password must Contain at least 8 Characters")
            .required("Required"),
        verifyPassword: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "Passwords must match"
        ),
    });
    return schema.isValid().then((valid) => console.log(valid));
};
export { signUpValidation };
