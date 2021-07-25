const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
    const authHeader = req.headers["authorization"];

    // authHeader is undefined or equal to Token
    // authHeader = Bearer <Token>
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.status(401).send("Access Denied");

    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // Get user from the database
        const log_user = await User.findOne({ _id: verified._id });
        if (!log_user) return res.status(400).send("User not found");

        req.user = log_user;
    } catch (err) {
        res.status(403).send("Invalid Token");
    }

    next();
};

module.exports = auth;
