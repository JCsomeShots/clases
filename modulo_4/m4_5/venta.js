function calcularPrecio() {

    let segmento = 'mujer';
    let talla = 's';
    let precio = 0 
    let eleccio = segmento + '-' + talla

    switch (eleccio) {

        case 'mujer-xs':
            precio = 1
            break

        case 'mujer-s':
            precio = 2
            break

        case 'niños-xl':
            precio = 20
            break

        case 'hombre-m':
            precio = 16
            break

        default :
            precio = 18
    }



    console.log('el precio final de la chaqueta es: ' + precio)
}