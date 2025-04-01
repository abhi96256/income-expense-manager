const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
    return res.status(200).json({ message: "Auth route is working!" });
});

router.post("/login", (req, res) => {
    return res.status(200).json({ message: "Login successful!" });
});

router.post("/register", (req, res) => {
    return res.status(201).json({ message: "User registered successfully!" });
});

module.exports = router;
