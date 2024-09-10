const express = require("express")
const { dbConnect } = require("./db/dbConnect")
const { userRouter } = require("./routes/userRouter")

const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//api(demo)
app.get("/", (req, res) => {
    res.send("SERVER AT WORK")
})

//routes
app.use("/user", userRouter)

//listen
const PORT = 2000
const hostname = "127.0.0.4"

app.listen(PORT, hostname, () => {
    console.log(`server running at http://${hostname}:${PORT}`);
    dbConnect()
})