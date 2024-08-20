const express = require("express")

const { userSignup, getUser, updateUser, deleteUser } = require('../controllers/userControllers')

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.send("This is user route")
})

userRouter.post("/signup", userSignup)

userRouter.post("/getuser", getUser)

userRouter.put("/update/:mobile", updateUser)

userRouter.delete("/delete", deleteUser)

module.exports = { userRouter }