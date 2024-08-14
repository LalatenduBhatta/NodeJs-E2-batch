const express = require("express")
//path
const path = require("path")
//server initialization
const app = express()
//middleware'
//json
app.use(express.json())

//API
app.get("/", (req, res) => {
    // res.write("Hello world")
    // res.end()
    // res.send("<h1>HELLO WORLD</h1>")
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.get("/index.css", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "css", "index.css"))
})

app.get("/form.js", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "js", "form.js"))
})

app.get("/about", (req, res) => {
    res.send("This is About page")
})

app.get("/getStudent", (req, res) => {
    let student = {
        name: "Virat", age: 35,
        address: "Delhi"
    }
    // res.send(student)
    res.json(student)
})

app.post("/postData", (req, res) => {
    console.log(req.body) //to get the body data
    // console.log(req.headers); //to get all headers
    let stduent = req.body
    res.send({ message: "data recieved" })
})

//listen to the PROT and hostname
app.listen(2000, "127.0.0.7", () => {
    console.log("server is starting at http://127.0.0.7:2000");
})

//global variable
// console.log(__dirname);//C:\Users\HP\OneDrive\Desktop\Node E2\expressServer
// console.log(__filename);//C:\Users\HP\OneDrive\Desktop\Node E2\expressServer\index.js

