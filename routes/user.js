const express = require("express");
const router = express.Router();
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync");
const { saveRedirectUrl } = require("../middleware.js");
const { renderSignup, signup, renderLogin, login, logout } = require("../controllers/user.js");

// Signup Routes
router.get("/signup", renderSignup);
router.post("/signup", wrapAsync(signup));

// Login Routes
router.get("/login", renderLogin);
router.post(
    "/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true,
    }),
    login
);

// Logout Route
router.get("/logout", logout);

module.exports = router;
