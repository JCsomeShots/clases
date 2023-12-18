function numeroPrimo(){
    const num = parseInt(document.getElementById('number').value)
    let mensaje = ''

    // if (num > 1 && num % 2 !== 0) {
    //     mensaje = 'El número ingresado es primo '
    // } else {
    //     mensaje = 'El número ingresado NO es primo '
    // }
    if (num <= 0 ) {
        mensaje = 'Mayor a cero'
    } else if ( num == 1) {
        mensaje = 'Este número no es primo'
    } else if ( num == 2) {
        mensaje = 'Este número si es primo'
    } else {
        
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                mensaje = 'Este número no es primo'
                break
            } else {
                mensaje = 'Este número si es primo'
            }
        }
    }
    document.getElementById('resultado').innerHTML = mensaje 
}