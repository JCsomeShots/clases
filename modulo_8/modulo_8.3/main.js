import { Cliente } from "./cliente.js";
import { Cuenta } from "./cuentas.js";

//Botones
const crearCliente = document.getElementById('CrearCliente')
const eliminarCliente = document.getElementById('EliminarCliente')
const CrearCuenta = document.getElementById('CrearCuenta')

// Botones dentro de le section
const addInput = document.getElementById('addInput')
const deleteClient = document.getElementById('deleteClient')

// sections
const createSection = document.getElementById('create')
const deleteSection = document.getElementById('delete')
const crearCuentaCliente = document.getElementById('crearCuentaCliente')

// Persistencia
const clientes = []

function indexCliente(dni) {
    const cActual = clientes.find( cliente => cliente.dni == dni)
    let index
    if (cActual) {
        index = clientes.findIndex( cliente => cliente.dni == dni)
    } else {
        index = -1
    }

    return index
}

function crearClienteNou() {
    createSection.style.display = 'block'
}
function eliminarClienteNou() {
    deleteSection.style.display = 'block'
}

function visualizarCrearCuenta(){
    crearCuentaCliente.style.display = 'block'
}


function darDeAlta() {
    const nombre = document.getElementById('nombreCliente').value
    const apellido = document.getElementById('apellidoCliente').value
    const dni = document.getElementById('dni').value

    const cliente = new Cliente(nombre, apellido, dni)
    clientes.push(cliente)
    console.log(clientes)
}

function darDeBaja(){

    const dni = document.getElementById('dniDelete').value
    const clienteEncontrado = indexCliente(dni) // número posición o -1 

    if (clienteEncontrado != -1) {
            clientes.splice(clienteEncontrado, 1)
    }

    console.log(clientes)
}


createSection.style.display = 'none'
deleteSection.style.display = 'none'
crearCuentaCliente.style.display = 'none'

crearCliente.addEventListener('click', crearClienteNou)
eliminarCliente.addEventListener('click', eliminarClienteNou)
CrearCuenta.addEventListener('click', visualizarCrearCuenta)

addInput.addEventListener('click', darDeAlta)
deleteClient.addEventListener('click', darDeBaja)