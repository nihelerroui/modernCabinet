const Doctor = require("../models/Doctor");

const createDoctorProfile = async (req, res) => {
    try {
        const { speciality, bio, experience, consultationDuration, officeAddress } = req.body;
        const doctorsExists = await Doctor.findOne({ userId: req.user.id });

        if (doctorsExists) {
            return res.status(400).json({ message: "Doctor Profile already exists" });
        } else {
            const doctor = await Doctor.create({
                userId: req.user.id,
                speciality,
                bio,
                experience,
                consultationDuration,
                officeAddress
            });
            res.status(201).json(doctor);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {createDoctorProfile};