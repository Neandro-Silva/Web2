const clientes = require('./clientes.json');

const clienteList = clientes.Clientes;

function ListarClientes() {
    console.log('\n## Lista de clientes ##');
    clienteList.forEach(cliente => {
        for(let i = 0; i<1; i++) {
            console.log(`${cliente.Nome}, ${cliente.Email}, ${cliente.Telefone}, ${cliente.Endereço}`);
        }
        
    });
}

function pesquisarCliente(nome) {
    const clienteEncontrado = clienteList.find(cliente => cliente.Nome === nome)
    if(clienteEncontrado) {
        console.log(`\n${nome} existe na base de dados`)
    } else {
        console.log(`\n${nome}, não foi encontrado na base de dados`)
    }
}

function filter() {
    console.log('\n## Telefone não preenchidos ##')
    const semTelefone = clienteList.filter(cliente => cliente.Telefone == "")
    
    console.log(semTelefone) 
}

ListarClientes();

filter();

/*const prompt = require('prompt-sync')();
const nomeCliente = prompt('Informe o nome do cliente: ')

pesquisarCliente(nomeCliente)*/

