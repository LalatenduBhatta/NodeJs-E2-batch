const fs = require("fs")

// //create
// //async
// fs.writeFile("demo.txt", "HELLO WORLD", "utf-8", (err) => {
//     if (err) console.log(err)
//     else console.log("File created")
// })
// //sync
// fs.writeFileSync("demo1.txt", "HELLO JSPIDERS", "utf-8")
// console.log("file demo1 created");

// //read
// //async
// fs.readFile("./demo.txt", "utf-8", (err, data) => {
//     if (err) console.log(err);
//     else console.log(data);//HELLO WORLD
// })

// //sync
// let data = fs.readFileSync("./demo1.txt")
// console.log(data.toString());//HELLO JSPIDERS

// //update
// //async
// let data = " NEW DATA"
// fs.appendFile("./demo.txt", data, (err) => {
//     if (err) console.log(err);
//     else console.log("file updated");
// })

// //sync
// fs.appendFileSync("./demo1.txt", " ADDING NEW DATA")


// //delete
// // async
// fs.unlink("./demo.txt", (err) => {
//     if (err) console.log(err);
//     else console.log("file deleted");
// })
// //sync
// fs.unlinkSync("./demo1.txt")

// // rename
// fs.rename("./virat.js", "./virat.html", (err) => {
//     if (err) console.log(err);
//     else console.log("file renamed");
// })

// //copy(it creates a new file with new reference)
// fs.copyFile("./demo2.txt", "./newFile.txt", (err) => {
//     if (err) console.log(err);
//     else console.log("file copied");
// })

// //link(it creates a new file with same reference)
// fs.link("./demo3.txt", "./newFile2.txt", (err) => {
//     if (err) console.log(err);
//     else console.log("file linked");
// })

//folder
//create
// fs.mkdir("../example", (err) => {
//     if (err) console.log(err);
//     else console.log("folder created");
// })

// //delete
// fs.rmdir("../example", (err) => {
//     if (err) console.log(err);
//     else console.log("folder deleted");
// })
