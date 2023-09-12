/*const fs = require("fs")
console.log(fs.readFileSync("clientes.json"))*/

const fs = require("fs")
console.log(JSON.parse(fs.readFileSync("clientes.json")))

function getClientes(req, res) {
    try {
        const cliente = JSON.parse(fs.readFileSync("clientes.json"))
        res.send(cliente)
    }catch(error) {
        res.status(500)
        res.send(error.message)
    }
}