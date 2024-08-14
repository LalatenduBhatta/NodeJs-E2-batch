// console.log("index js file");

const sendBtn = document.getElementById("send")

let data = { id: 10, name: "Xyz", age: 20, address: "abc" }

sendBtn.addEventListener("click", async () => {
    try {
        let response = await fetch("/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        let res = await response.json()
        console.log(res);
    } catch (err) {
        console.log(err);
    }
})

let getBtn = document.getElementById("get")

getBtn.addEventListener("click", async () => {
    try {
        let response = await fetch("/getdata")
        let data = await response.json()
        console.log(data);
    }
    catch (error) {
        console.log(error);
    }
})