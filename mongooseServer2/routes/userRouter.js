const express = require("express")
const { getAllusers, userSignup, updateUser, deleteUser } = require("../controllers/userController")

const userRouter = express.Router()

//userAPIs

userRouter.get("/", getAllusers)

userRouter.post("/register", userSignup)

userRouter.put("/update", updateUser)

userRouter.delete("/delete", deleteUser)


module.exports = { userRouter }