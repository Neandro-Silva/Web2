const {Router} = require("express")
const router = Router()
const {getClientes} = require("../controladores/clienteController")


router.get('/', getClientes) 

router.post('/', (req, res) =>{
res.send('Utilizando o post')
})

module.exports = router

