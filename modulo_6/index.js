const assignatures = [
    'Història universal',
    'Història dEspanya',
    'Geografia',
    'Història de la llengua catalana',
    'Antropologia',
    'Anglès'
]

const str = 'Història'


function buscarPalabra() {

    const arrayCoincidencia = []

    for( let i = 0; i < assignatures.length; i++) {
        if (assignatures[i].includes(str)) {
            arrayCoincidencia.push(assignatures[i])
        }
    }

    if (arrayCoincidencia.length > 0 ) {
        console.log(arrayCoincidencia)
    } else {
        console.log('No hemos encontrado coincidencia')
    }
}