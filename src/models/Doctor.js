const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    speciality: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        default: ""
    },
    experience: {
        type: Number,
        default: 0
    },

    consultationDuration: {
        type: Number,
        default: 30
    },

    officeAddress: {
        type: String,
        default: ""
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Doctor", doctorSchema);