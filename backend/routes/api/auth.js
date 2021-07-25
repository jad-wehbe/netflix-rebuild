const express = require("express");
const router = express.Router();
const verifyToken = require("../../middlewares/verifyToken");

const {
    register,
    login,
    forgetPassword,
    resetPassword,
    private,
    refreshToken,
    logout,
} = require("../../controllers/auth");

// Routes
router.post("/register", register);

router.post("/login", login);

router.post("/forgetPassword", forgetPassword);

router.put("/resetPassword/:resetToken", resetPassword);

// Test Route
router.get("/private", verifyToken, private);

// JWT Refresh Token Route
router.post("/token", refreshToken);
router.delete("/logout", logout);

module.exports = router;
