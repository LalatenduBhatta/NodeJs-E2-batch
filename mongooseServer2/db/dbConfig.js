const mongoose = require('mongoose')

const dbConnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/myapp")
        console.log("db connected");
    } catch (error) {
        console.log("something went wrong in DB");
    }
}


module.exports = { dbConnect }