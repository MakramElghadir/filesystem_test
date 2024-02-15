const fs = require("fs")

const db = "./db/users.json"
const db2 = "./db/coches.json"

function readJSON(){
    const miobjecto_json = fs.readFileSync(db,"utf-8")
    const miobjecto = JSON.parse(miobjecto_json)
    console.log(miobjecto)
    return miobjecto
}

function resetUser(){
    const user0 = {
        "username": "admin",
        "password": "1234"
    }
    const user1 = {
        "username": "user1",
        "password": "123456"
    }
    const miobjecto = {
        "users": [user0, user1]
    }

    fs.writeFile(db , JSON.stringify(miobjecto, null, 2), (error) => {
        if (error) {
            console.log(error)
            return
        }
        console.log("users.json updated")
    })


    console.log("usuarios reseteado correctamente.")

    

}

function addUser(){
    const miobjecto = readJSON(db);
    const { users } = miobjecto

    console.log(users)
}

addUser()

module.exports = {
    db,
    readJSON
}

