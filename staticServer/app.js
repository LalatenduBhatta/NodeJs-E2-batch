const express = require("express")
const { join } = require("path")

const app = express()
const PORT = 5000
const hostname = "127.0.0.5"
//middleware
//static folder middlweare
app.use(express.static(join(__dirname, "public")))
//json
app.use(express.json())
//url
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "public", "index.html"))
})

app.post("/send", (req, res) => {
    console.log(req.body);
    res.send({ message: "Data recieved" })
})

app.get("/getdata", (req, res) => {
    res.send({ name: "Niraj Chopra", age: 27, address: "Hariyana" })
})

app.post("/login", (req, res) => {
    console.log(req.body);
    res.sendFile(join(__dirname, "public", "index.html"))
})

app.listen(PORT, hostname, () => {
    console.log(`server running in http://${hostname}:${PORT}`);

})
