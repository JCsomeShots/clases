const numRandom = Math.ceil((Math.random() * 10));
let numUsuario = 0

do {
    numUsuario = parseInt( prompt('Escriba un número entre 1 y 10') )
} while (numRandom != numUsuario)


let message = 'Enhorabuena !!! El número es el ' + numUsuario 
alert(message)