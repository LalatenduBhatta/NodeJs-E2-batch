const bcrypt = require("bcrypt")

const password = "Virat1234"


const saltRound = 10

bcrypt.hash(password, saltRound, (err, hashedPass) => {
    if (err) console.log(err);
    else console.log(hashedPass);
})

const hashPass = "$2b$10$41jHZsEF5jwOl8hLzFXCselFVGCxiSFLUIZQNpHcrvaWw3WkY7rjG"

bcrypt.compare("Virat1234", hashPass, (err, result) => {
    if (err) console.log(err);
    else console.log(result);
})