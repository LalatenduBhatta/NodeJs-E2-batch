const express = require("express")
const multer = require("multer")
const app = express()//express initialization
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./assets")
    },
    filename: (req, file, cb) => {
        cb(null, "a" + file.originalname)
    }
})
const upload = multer({ storage })
// const upload = multer()//multer initialization

const PORT = 4000
const hostname = "127.0.0.4"

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//APIs
app.get("/", (req, res) => res.send("HELLO"))
//post method(json data) //uses json() middleware
app.post("/json", (req, res) => {
    res.send(req.body)
})
//post method(url data)  //uses urlencoded() middleware
app.post("/url", (req, res) => {
    res.send(req.body)
})
//post method(form data) //uses multer() middleware
app.post("/form", upload.none(), (req, res) => { //for uploading form data without any file
    res.send(req.body)
})
//post method(form file upload) //uploading a single file using multer()
app.post("/file", upload.single("picture"), (req, res) => {
    //files will come in req.file
    //other text data will come in req.body property
    res.send(req.file)
})


app.listen(PORT, hostname, () => {
    console.log("server running at http://" + hostname + ":" + PORT);
})