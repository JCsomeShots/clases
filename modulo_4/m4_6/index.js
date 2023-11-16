const validation = document.getElementById('vali')

function signo() {

    let day = parseInt(document.getElementById('num').value)
    let mes = document.querySelector('input[name="mes"]:checked')
    let tuSigno = ''

    if (mes) {
        mes = parseInt(mes.value)
    } else {
        validation.innerHTML = 'Debe elegir un mes'
        return
    }

    if (day < 1 || day > 31) {
        validation.innerHTML = 'Por favor, introduzca una fecha válida'
        return
    }
    
    console.log(day, mes)

    switch (mes) {
        case 1 :
            tuSigno = (day < 20) ? 'Capricornio' : 'Acuario'
            break

        case 2 : 
            tuSigno = (day < 19) ? 'Acuario' : 'Piscis'
            break

        default :
        break
    }

    document.getElementById('result').innerHTML = tuSigno

}