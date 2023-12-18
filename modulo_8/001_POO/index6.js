
class Persona {

    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get apellido() {
        return this._apellido
    }

    get nombre() {
        return this._nombre
    }
    get edad() {
        return this._edad
    }


    set apellido(x) {
        let password = prompt('Ingrese su password');
        if (password == 123) {
            this._apellido = x
        } else {
            alert('No hack')
        }
    }

    set nombre(x) {
        this._nombre = x
    }
    set edad(x) {
        this._edad = x
    }


}

const Clientes = [];

function create() {

    let nombre = document.getElementById('name').value  
    let apellido = document.getElementById('surname').value
    let edad = parseInt(document.getElementById('age').value)

    const Cliente = new Persona(nombre, apellido, edad)
    Cliente.description()
    erase()

    Clientes.push(Cliente)
    console.log(Clientes)

}

function erase() {
    document.getElementById('name').value = ''
    document.getElementById('surname').value = ''
    document.getElementById('age').value = ''
}

