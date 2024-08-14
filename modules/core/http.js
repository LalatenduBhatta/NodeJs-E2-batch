const http = require("http")

//server creating
const server = http.createServer((req, res) => {
    const { method, url } = req
    console.log(method, url);
    if (method == "GET") {
        if (url == "/") {
            res.write("<h1 style='color:red'><marquee>THIS IS THE HOME PAGE OF SERVER</marquee></h1>")
            res.end()
        }
        else if (url == "/about") {
            res.write("<h1>THIS IS THE ABOUT PAGE OF SERVER</h1>")
            res.end()
        }
    }
})

//server listening to a port and hostname
server.listen(5000, () => {
    console.log("server Started");
})