const mongoose = require("mongoose")
const mongoUrl = "mongodb://127.0.0.1:27017"
const database = "demo2"


//db connnect
async function dbConnect() {
    try {
        await mongoose.connect(`${mongoUrl}/${database}`)
        console.log("db connected");
    } catch (error) {
        console.log("connection error in database");
    }
}

module.exports = { dbConnect }