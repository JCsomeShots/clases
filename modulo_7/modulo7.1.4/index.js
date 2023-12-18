function verificar(){

    const num1 = parseFloat(prompt('Un número: '));
    const num2 = parseFloat(prompt('Otro número: '));

    if (num1 < 0 && num2 < 0) {
        alert ('Los 2 números son negativos');
    } else if (num1 < 0 || num2 < 0){
        alert ('Uno de los 2 números es negativo');
    } else {
        alert ('Los 2 números son positivos');
    }

}