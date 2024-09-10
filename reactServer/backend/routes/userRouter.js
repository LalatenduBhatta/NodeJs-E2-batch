const express = require("express")
const { getAllUsers, signup } = require("../controllers/userController")

const userRouter = express.Router()

//api

//signup
userRouter.post("/signup", signup)


//get users
userRouter.get("/all", getAllUsers)

module.exports = { userRouter }