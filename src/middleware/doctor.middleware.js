const isDoctor = (req, res, next) => {
    if (req.user.role !== "doctor") {
        res.status(403).json({ message: "Access denied, doctors only" });
    } else {
        next();
    }
};

module.exports = isDoctor;