const fs = require("fs")

const miobjecto_json = fs.readFileSync("./coche.json", "utf-8")
const miobjecto = JSON.parse(miobjecto_json)

console.ruedas = 10

fs.appendFileSync("./coche.json", JSON.stringify(miobjecto), "utf-8")