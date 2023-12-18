function dibujar() {

    let numeroLineas = parseInt(document.getElementById('numero').value)
    let mensaje = ''

    const caracter = '*';

    document.getElementById('resultado').innerHTML = ''

    for( let i = 0; i < numeroLineas; i++){
        mensaje += caracter
        document.getElementById('resultado').innerHTML += mensaje + '<br>'
    }
}