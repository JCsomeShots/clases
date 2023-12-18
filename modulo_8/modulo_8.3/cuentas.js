export class Cuenta {
    constructor(numeroCuenta) {
        this._numeroCuenta = numeroCuenta
        this._saldo = 0
    }

    get saldo() {
        return this._saldo
    }

    ingresarDinero(importe){
        this._saldo += parseFloat(importe)
    }

    retirarDinero(importe){
        if (this._saldo >= importe) {
            this._saldo -= parseFloat(importe)
        } 
    }

}