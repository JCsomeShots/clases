const result = document.getElementById('result')


function calcular() {
    let num1 = parseInt(document.getElementById('num1').value)
    let num2 =  parseInt(document.getElementById('num2').value)
    let radioSeleccionado = document.querySelector('input[name="operador"]:checked')
    let operar = null

    if (radioSeleccionado) {
    
        switch (radioSeleccionado.value) {
            case 'suma':
                operar =  'El resultado de la suma será ' + (num1 + num2)
                break
            case 'resta':
                operar =  'El resultado de la resta será ' + (num1 - num2)
                break
            case 'multiplica':
                operar =  'El resultado de la multiplicación será ' + (num1 * num2)
                break
            case 'divide':
                if (num2 === 0) {
                    operar = 'no se puede dividir por cero'
                } else {
                    operar =  'El resultado de la división será ' + (num1 / num2).toFixed(2)
                }
                break
            default : 
                operar = ' No ha elegido un operador'
        }

        result.innerHTML = operar

    } else {
        result.innerHTML = 'Te has olvidado de marcar un operador'
    }

    
}