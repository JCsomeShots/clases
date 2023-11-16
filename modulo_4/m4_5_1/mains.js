
//[17:11] Aramis Antonio Jakolic (Invitado)
function opcion(alfa) {

    

    let mensaje = '';
    console.log( alfa)

    
    switch (alfa) {
        case 'a':
            mensaje =  'Muy frio'
            break;
        case 'b':
            mensaje =   'Muy muy tibio'
            break;
        case 'c' :
            mensaje =  'ganaste'
            break;
        case 'd':
            mensaje =  'de tibio esta yendoa  frio'
            break;
        case 'e':
            mensaje =  'Estas congelado'
            break;
        } 
        document.getElementById('result').innerHTML = "Resultado:" + mensaje;
    }