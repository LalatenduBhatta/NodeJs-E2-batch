const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    const { method, url } = req
    console.log(method, url);
    if (method == "GET") {
        if (url == "/") {
            let data = fs.readFileSync("./view/pages/home.html")
            res.write(data)
            res.end()
        }
        else if (url == "/about") {
            let data = fs.readFileSync("./view/pages/about.html")
            res.write(data)
            res.end()
        }
        else if (url == "/login") {
            let data = fs.readFileSync("./view/pages/login.html")
            res.write(data)
            res.end()
        }
        else if (url == "/home.css") {
            let data = fs.readFileSync("./view/css/home.css", "utf-8")
            res.write(data)
            res.end()
        }
        else if (url == "/aiImage") {
            let data = fs.readFileSync("./view/assets/image.jpg")
            res.write(data)
            res.end()
        }
        else if (url == "/login.js") {
            let data = fs.readFileSync("./view/js/login.js")
            res.write(data)
            res.end()
        }
        else {
            res.write("404 Error!!! Page Not Found")
            res.end()
        }
    }
    else if (method == "POST") {
        if (url == "/login") {
            req.on("data", (data) => {
                let userData = JSON.parse(data.toString())
                // console.log(userData);
                if (userData) {
                    let users = JSON.parse(fs.readFileSync("./db/users.json", "utf-8"))
                    let isUser = users.find(ele => ele.username == userData.username)
                    if (isUser) {
                        res.write(JSON.stringify({ message: "User Already Exists" }))
                        res.end()
                    } else {
                        users.push(userData)
                        fs.writeFileSync("./db/users.json", JSON.stringify(users))
                        res.write(JSON.stringify({
                            message: "Login successfull"
                        }))
                        res.end()
                    }
                }
            })
        }
    }
})


server.listen(7000, "127.0.0.7", () => {
    console.log("server started at http://127.0.0.7:7000");
})