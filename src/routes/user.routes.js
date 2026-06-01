const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controllers");
const protect = require("../middleware/auth.middleware");
const {getProfile, updateProfile} = require("../controllers/user.controllers");

router.get("/profile" , protect, getProfile);
router.put("/profile", protect, updateProfile);

module.exports = router;