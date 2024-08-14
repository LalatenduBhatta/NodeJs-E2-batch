let path = require("path")
// console.log(path);

let demoPath = "C:\Users\HP\OneDrive\Desktop\Node E2\demo.js"

console.log(path.dirname(demoPath));//C:

console.log(path.basename(demoPath));//UsersHPOneDriveDesktopNode E2demo.js

console.log(path.extname(demoPath));//.js

console.log(path.join("demoFolder", "demo.js"))//demoFolder\demo.js

console.log(path.sep)// \
