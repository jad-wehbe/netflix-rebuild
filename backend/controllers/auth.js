const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { registerValidation, loginValidation } = require("../utils/validate");

exports.register = async (req, res) => {
    // Validation
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checking if the user is already in the database
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send("Email already exists");

    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
};

//! FOR TESTING PURPOSE ONLY!!!
let refreshTokens = [];

exports.refreshToken = (req, res) => {
    const refreshToken = req.body.token;

    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: "10m" },
        (err, user) => {
            if (err) return res.sendStatus(403);
            const accessToken = jwt.sign(
                { _id: user._id },
                process.env.ACCESS_TOKEN_SECRET
            );
            res.json({ accessToken: accessToken });
        }
    );
};

exports.login = async (req, res) => {
    // Validation
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Checking if the user is already in the database
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("User not found");

    //Checking password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");

    //Create and assign a token
    const accessToken = jwt.sign(
        { _id: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10m" }
    );

    // Create refreshToken
    const refreshToken = jwt.sign(
        { _id: user._id },
        process.env.REFRESH_TOKEN_SECRET
    );
    refreshTokens.push(refreshToken);

    res.json({ accessToken, refreshToken });
};

exports.logout = (req, res) => {
    refreshTokens = refreshTokens.filter((token) => token !== req.body.token);
    res.sendStatus(204);
};

exports.forgetPassword = (req, res) => {
    res.send("Forget password Route");
};
exports.resetPassword = (req, res) => {
    res.send("Reset Password Route");
};

// Test route
exports.private = (req, res) => {
    if (req.user) {
        user = req.user;
        res.json({ Username: user.username, Email: user.email, refreshTokens });
    }
};
