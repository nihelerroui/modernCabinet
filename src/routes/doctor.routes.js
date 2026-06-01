const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth.middleware");
const isDoctor = require("../middleware/doctor.middleware");

const {createDoctorProfile} = require("../controllers/doctor.controller");

router.post("/profile", protect, isDoctor, createDoctorProfile );

module.exports = router;
