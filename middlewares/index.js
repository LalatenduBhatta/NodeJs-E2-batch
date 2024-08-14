const express = require("express")

const app = express()

// let userRouter = express.Router()

// let studentRouter = express.Router()

// app.use("/user", userRouter)//user Router

// app.use("/student", studentRouter) //student router

// userRouter.get("/", (req, res) => {
//     console.log("hi");
//     res.send("This is a userRouter get method")
// })

// userRouter.get("/address", (req, res) => {
//     console.log("this address api");
//     res.send({ address: "Odisha" })
// })

// studentRouter.get("/", (req, res) => {
//     res.send("This is from student router")
// })

app.use((err, req, res, next) => {
    //to handel the error
    res.send(err.message)
})

app.get("/", (req, res) => {
    throw new Error("Can not process right now")
    // res.send("hi")
})


app.listen(4000, "127.0.0.4", () => {
    console.log("server is running in http://127.0.0.4:4000");
})