export class Cliente {

    constructor(nombre, apellido, dni) {
        this._nombre = nombre
        this._apellido = apellido        
        this._dni = dni
    }

    get nombre() {
        return this._nombre
    }
    get apellido() {
        return this._apellido
    }
    get dni() {
        return this._dni
    }

}