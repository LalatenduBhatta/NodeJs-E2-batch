const { userModel } = require("../models/userModel")

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        return res.status(200).send(users)
    }
    catch (error) {
        return res.status(500).send({ error: "Internal Server Error", errormessage: error.message })
    }
}

const signup = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username && !password) {
            return res.status(400).send({ error: "Provide all required fields" })
        } else {
            const isUser = await userModel.findOne({ username })
            if (isUser) {
                return res.status(400).send({ error: "User already registered" })
            }
            else {
                const user = new userModel(req.body)
                await user.save()
                return res.status(201).send({ message: "user registered successfully" })
            }
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error", errormessage: error.message })
    }
}


module.exports = { getAllUsers, signup }