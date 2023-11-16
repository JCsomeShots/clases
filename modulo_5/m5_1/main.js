function crearPromp() {

    let num = parseInt(document.getElementById('num').value);
    const arrayPalabra = [];
    let palabraInput = ''

    for(let i = 0; i < num; i++) {
        
        palabraInput = prompt('Escriba una palabra');
        arrayPalabra.push(palabraInput)
        console.log(arrayPalabra)
    }

}