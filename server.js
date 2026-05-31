const express = require('express');
const cors = require('cors');
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require('./config/db');

const app = express();

// connection DB
connectDB();
//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth.routes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})