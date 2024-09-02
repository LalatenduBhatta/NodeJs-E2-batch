const { userModel } = require("../model/userModel")

//post user
const postUser = async (req, res) => {
    try {
        const { name, age, address, isActive } = req.body
        if (name && age && address && isActive != undefined) {
            const data = new userModel({ name, age, address, isActive })
            await data.save()
            return res.status(201).send({ message: "User registraion successfull" })
        }
        else {
            return res.status(400).send({ error: "Provide all fields" })
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" })
    }

}
//get all users
const getUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        return res.status(200).send({ allUsers: users })
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error", msg: error.message })
    }
}

//get user by name
const getUserByName = async (req, res) => {
    try {
        const { name } = req.params
        const user = await userModel.findOne({ name })
        if (user) {
            return res.status(200).send(user)
        } else {
            return res.status(404).send({ error: "user not found" })
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error", msg: error.message })
    }
}

//deletUser
const deleteUser = async (req, res) => {
    try {
        const { name } = req.params
        const response = await userModel.deleteOne({ name })
        if (response.deletedCount > 0) {
            return res.status(200).send({ message: "user deleted" })
        } else {
            return res.status(404).send({ error: "user not found" })
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error", msg: error.message })
    }
}

//updateUser
const updateUser = async (req, res) => {
    try {
        if (req.query) {
            const user = await userModel.findOne(req.query)
            if (user) {
                const response = await userModel.updateOne({ ...req.query }, { $set: { ...req.body } })
                return res.status(200).send({ message: "user updated" })
            }
            else {
                return res.status(404).send({ error: "user not found" })
            }
        } else {
            return res.status(400).send({ error: "provide user details" })
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error", msg: error.message })
    }
}
module.exports = { postUser, getUsers, getUserByName, deleteUser, updateUser }