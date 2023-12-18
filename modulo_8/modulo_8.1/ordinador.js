
export class Ordenador {

    constructor(marca, modelo, procesador, ram, discDur, id) {
        
        this._id = id
        this._marca = marca
        this._modelo = modelo
        this._procesador = procesador
        this._ram = ram
        this._discDur = discDur
    }

    get marca() {
        return this._marca
    }
    get modelo() {
        return this._modelo
    }
    get procesador() {
        return this._procesador
    }
    get ram() {
        return this._ram
    }
    get discDur() {
        return this._discDur
    }
    get id() {
        return this._id
    }

    // Setters
    set procesador(x) {
        this._procesador = x
    }
    set ram(x) {
        this._ram = x
    }
    set discDur(x) {
        this._discDur = x
    }

    // Programa
    programa(enEjecucio) {
        return `En aquests moments s'està executant: ${enEjecucio}`
    }

    toString() {
        return `Este ordenador con id ${this._id} <br>
        tiene la marca ${this._marca} <br>
        el modelo ${this._modelo} <br>
        el procesador ${this._procesador} <br>
        el ram ${this._ram} <br>
        el discDur ${this._discDur} <br>
        `
    }
}



