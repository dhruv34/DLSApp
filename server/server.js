const express = require('express')
const connectDB = require('./db.js')
const playerModel = require('./models/Player.js')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.get('/', async (req, res) => {
    const players = await playerModel.find()
    return res.json({playersData: players})
})

// app.get("/api", (req, res) => {
//     res.json({"players": [
//         {"name": "Messi"}, 
//         {"name": "Ronaldo"}, 
//         {"name": "Neymar"}
//     ]})
// })

app.listen(5001, () => {console.log("Server started on port 5001")}) 




