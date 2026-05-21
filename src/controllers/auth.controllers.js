const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req , res) => {
    try {
        const {name, email, password } =req.body;

        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: "User already exists"});
        }

        const user = await User.create({
            name,
            email,
            password
        });
        res.status(201).json({
            message: "User created",
            userId: user._id,
        });
    } catch (error) {
        res.status(500).json({message: error.message });

    }
};