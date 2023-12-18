function mostrarTabla( ) {

    var numero = parseInt(document.getElementById('numero').value)
    var result = document.getElementById('resultado')

    if (isNaN(numero) || numero < 1 || numero > 10) {
        alert(' sólo valores del 1 al 10');
        return;
    }

    var tabla = []

    for (let i = 1; i <= 10; i++) {
        tabla.push(numero + ' x ' + i + ' = ' + (numero * i))
    }

    result.innerHTML = tabla.join('<br>')
}