const express = require("express")
const app = express()

const port = 8000

app.get('/teste', (req, res) =>{
    res.send("Olá, mundo em Bonfim 2")
})

app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)
})