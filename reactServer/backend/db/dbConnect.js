const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

const url = process.env.MONGO_URL

const dbConnect = async () => {
    try {
        await mongoose.connect(url)
        console.log("Database connected");
    } catch (error) {
        console.log("error while connecting to database");
    }
}

module.exports = { dbConnect }