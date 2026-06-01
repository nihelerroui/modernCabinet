const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require('./src/config/db');

const app = express();

// connection DB
connectDB();
//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", require("./src/routes/auth.routes"));
app.use("/api/users", require("./src/routes/user.routes"));
app.use("/api/doctors", require("./src/routes/doctor.routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})