document.getElementById('generar').addEventListener('click', function() {

    let num = parseInt(document.getElementById('num1').value)
    let caracter = document.getElementById('caracter').value || ' '

    let resultado  = '';

    for (let i = 1; i <= num; i++) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += caracter + ' ';
        }
        resultado += linea + '<br>'
    }

    for (let i = (num - 1); i >= 1 ; i--) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += caracter + ' ';
        }
        resultado += linea + '<br>'
    }

    document.getElementById('resultado').innerHTML = resultado
})



