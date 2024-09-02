const mongoose = require("mongoose")

//schema declaration
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    isActive: Boolean,
    address: {
        city: String,
        pin: Number,
        state: String
    }
})

//model connection
const userModel = mongoose.model("users", userSchema)

module.exports = { userModel }