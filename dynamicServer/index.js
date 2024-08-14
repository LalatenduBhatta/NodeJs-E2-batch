const express = require("express")
const { join } = require("path")

const app = express()
const PORT = 7000
const hostname = "localhost"

//setting the template engine
app.set("view engine", "ejs")
app.set("views", join(__dirname, "views", "pages"))

//middlewares
app.use(express.json())
app.use(express.static(join(__dirname, "views")))

//api
app.get("/", (req, res) => {
    res.render("index", { name: "Niraj", age: 26, address: "Hariyana" })
})
app.get("/about", (req, res) => {
    let user = { name: "Virat", age: 14, address: "Delhi" }
    let fruits = ["apple", "banana", "grapes", "mango", "kiwi"]
    res.render("about", { user, fruits })
})

app.listen(PORT, hostname, () => {
    console.log("server running in http://" + hostname + ":" + PORT)
})