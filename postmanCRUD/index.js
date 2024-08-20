const express = require("express")
const { userRouter } = require("./routes/userRoute")

const app = express()
const PORT = 8000
const hostname = "127.0.0.2"

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//api
app.get("/", (req, res) => {
    res.send("Server is working")
})

//ruotes
app.use("/user", userRouter)

app.listen(PORT, hostname, () => {
    console.log(`server running in http://${hostname}:${PORT}`);
})