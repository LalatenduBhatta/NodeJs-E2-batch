const express = require("express")
const { postUser, getUsers, getUserByName, deleteUser, updateUser } = require("../controllers/userController")

const userRouter = express.Router()

//testAPI
userRouter.get("/", (req, res) => { //http:127.0.0.5:5000/user/
    res.send("user router working")
})

//postAPI(create user)
userRouter.post("/post", postUser) //http:127.0.0.5:5000/user/post

//getAPI (get all users)
userRouter.get("/get", getUsers) //http:127.0.0.5:5000/user/get

//get the user(one user)
userRouter.get("/get/:name", getUserByName)//http:127.0.0.5:5000/user/get/(name)

//deleteAPI(delete user)
userRouter.delete("/delete/:name", deleteUser) //http:127.0.0.5:5000/user/delete/(name)

//updateAPI(update user)
userRouter.put("/update", updateUser) //http:127.0.0.5:5000/user/update(query)?key=value

module.exports = { userRouter }