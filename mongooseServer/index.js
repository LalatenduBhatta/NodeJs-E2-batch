const express = require("express")
const { dbConnect } = require("./db/dbConnect")
const { userRouter } = require("./routes/userRouter")

const app = express()
const PORT = 5000
const hostname = "127.0.0.5"
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//test api
app.get("/", (req, res) => {
    res.send("HELLO WORLD")
})

//routes
app.use("/user", userRouter)


app.listen(PORT, hostname, () => {
    console.log("server running in http://" + hostname + ":" + PORT);
    dbConnect()
})