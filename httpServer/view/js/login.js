let loginForm = document.getElementById("login")

let formData = {}

loginForm.addEventListener("input", (e) => {
    let value = e.target.value;
    let name = e.target.name
    formData[name] = value
})

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!formData.username || !formData.password) {
        alert("provide all fields before submit")
    }
    else {
        //send the data to node-server
        fetch("/login", {
            method: "POST",
            body: JSON.stringify(formData)
        }).then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }
})