const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Price: Number,
    Nationality: String,
    Club: String,
    Position: String,
    Foot: String,
    Rating: Number,
    Height: Number,
    Speed: Number,
    Acceleration: Number,
    Stamina: Number,
    Strength: Number,
    Control: Number,
    Passing: Number,
    Shooting: Number,
    Tackling: Number,
    Reactions: Number,
    Handling: Number,
    Rating_Change: String,
    Total_Stats: Number,
    ID: String,
})

const playerModel = mongoose.model("Player", playerSchema)

module.exports = playerModel