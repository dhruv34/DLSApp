const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://dhruv0515:Sairam12@dlsplayers.w9uuyb7.mongodb.net/playerInfo?retryWrites=true&w=majority&appName=DLSPlayers",
            );
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Error: ', error);
        process.exit(1);
    }
};

module.exports = connectDB;