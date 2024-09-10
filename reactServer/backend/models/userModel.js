const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String },
    age: { type: Number },
    mobile: { type: String },
    address: {
        pin: Number,
        city: String,
        state: String
    }
})

const userModel = mongoose.model("users", userSchema)

module.exports = { userModel }