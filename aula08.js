const clientes = require('./clientes.json');

const clienteList = clientes.Clientes;

function ListarClientes() {
    console.log('\n## Lista de clientes ##');
    clienteList.forEach(cliente => {
        console.log(cliente.Nome);
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

ListarClientes();

const prompt = require('prompt-sync')();
const nomeCliente = prompt('Informe o nome do cliente: ')

pesquisarCliente(nomeCliente)
