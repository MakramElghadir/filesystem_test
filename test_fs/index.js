console.log("index.js online")

const fs = require("fs")

const coche = {
    "ruedao" : 4,
    "puerta" : 5,
    "tipo_motor" : "electrico",
    "marca" : "toyota",
    "modelo" : "fiesta"
}

const coche_json = JSON.stringify(coche, null, 2)


fs.writeFile("./coches/coche.json", coche_json , (error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("coche.json creado")
})