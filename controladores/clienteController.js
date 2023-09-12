function getClientes(req, res) {
    try{
        //throw new Error("occoreu um erro no Banco")
        res.send('Olá, mundo!')
    }catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getClientes
}