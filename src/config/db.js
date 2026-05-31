//importer la librairie mongoose pour se connecter à la base de données MongoDB
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch(error) {
        console.log(error);
        process.exit(1); //arreter complètement l'application

    }
};

module.exports = connectDB;
