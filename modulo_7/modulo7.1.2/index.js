function evaluar() {
    let notas = parseInt(document.getElementById('notas').value)

    const arrayNotas = [];
    let result

    while (notas != arrayNotas.length) {

        let nota = prompt('Escriba una nota')
        arrayNotas.push(nota)
    }

    console.log(arrayNotas)
    result = calcula(arrayNotas, notas)

    document.getElementById('result' ).innerHTML = result
}



function calcula(arrayNotas, notas){

    let sumNotas = 0

    for(let i = 0; i < arrayNotas.length; i++) {

        sumNotas += parseInt(arrayNotas[i])
    }
    console.log(sumNotas)
    return (sumNotas / notas)
}