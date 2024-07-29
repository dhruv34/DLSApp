const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    First_Name: String,
    Last_Name: String,
    Price: String,
    Nationality: String,
    Club: String,
    Position: String,
    Foot: String,
    Rating: String,
    Height: String,
    Speed: String,
    Acceleration: String,
    Stamina: String,
    Strength: String,
    Control: String,
    Passing: String,
    Shooting: String,
    Tackling: String,
    Reactions: String,
    Handling: String,
    Rating_Change: String,
    Total_Stats: String,
    ID: String,
})

const playerModel = mongoose.model("Player", playerSchema)

module.exports = playerModel