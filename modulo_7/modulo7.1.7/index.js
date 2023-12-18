function quadrat(){

    let mida = parseInt(document.getElementById('mida').value)
    let caracter = document.getElementById('caracter').value

    let quadrat2 = '';

    if (isNaN(mida)) {
        alert('Introduix un num valid')
        return;
    } 

    for (let i = 0; i < mida; i++) {
        let linea = ''
        for  (let j = 0; j < mida; j++) {
            linea += caracter + ' '
        }
        quadrat2 += linea + '<br>'
    }

    document.getElementById('result').innerHTML = quadrat2
}