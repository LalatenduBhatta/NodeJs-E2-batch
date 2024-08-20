const express = require("express")
const fs = require("fs")
const { join } = require("path")

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.send("This is user route")
})

userRouter.post("/signup", (req, res) => {
    // console.log(req.body);
    const { name, age, address, mobile } = req.body
    if (!name || !age || !address || !mobile) {
        res.status(400).send({ message: "Provide All Required Fields" })
    } else {
        let allUsers = JSON.parse(fs.readFileSync(join(__dirname, "..", "json", "users.json"), "utf-8"))
        let isUser = allUsers.find(e => e.mobile == mobile)
        if (isUser) {
            res.status(400).send({ message: "User Already Registered" })
        } else {
            allUsers.push({ name, age, address, mobile })
            fs.writeFileSync(join(__dirname, "..", "json", "users.json"), JSON.stringify(allUsers))
            res.status(201).send({ message: "User Registraion Successfull" })
        }
    }

})




module.exports = { userRouter }