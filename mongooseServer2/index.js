const express = require("express")
const { userRouter } = require("./routes/userRouter")
const { dbConnect } = require("./db/dbConfig")

const app = express()

const PORT = 8000
const hostname = "localhost"

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routers
app.use("/user", userRouter)

app.listen(PORT, hostname, () => {
    console.log("server running at PORT " + PORT);
    dbConnect()
})