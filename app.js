const express = require("express")
const rotaCliente = require("./router/cliente")

const app = express()

const port = 8000

app.use('/clientes', rotaCliente) 

app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)
})