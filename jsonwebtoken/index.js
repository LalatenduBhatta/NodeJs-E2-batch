const jwt = require("jsonwebtoken")

const userData = { name: "Virat", age: 35, address: "India" }

const secretKey = "Virat1234"

const token = jwt.sign(userData, secretKey, { expiresIn: 60 }) //sec //"1d" "10h" 

// console.log(token);

const tokenString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVmlyYXQiLCJhZ2UiOjM1LCJhZGRyZXNzIjoiSW5kaWEiLCJpYXQiOjE3MjU0MzY0OTMsImV4cCI6MTcyNTQzNjU1M30.g19h2t5imfwjHVwOKL68vFfIW82iNfTcD1SuZxC0QYs"

jwt.verify(tokenString, secretKey, ((error, data) => {
    if (error) console.log(error.message);
    else console.log(data);
}))