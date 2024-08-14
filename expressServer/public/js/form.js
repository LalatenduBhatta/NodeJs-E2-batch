console.log("hello world");

let getBtn = document.getElementById("get")

getBtn.addEventListener("click", () => {
    fetch("/getStudent").then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})

let postBtn = document.getElementById("post")
let student = {
    name: "Rohit",
    age: 36, address: "Mumbai"
}
postBtn.addEventListener("click", () => {
    fetch("/postData", {
        method: "POST",
        headers: {
            "content-type": "application/json",
            "message": "this is a student data"
        },
        body: JSON.stringify(student)
    }).then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
})