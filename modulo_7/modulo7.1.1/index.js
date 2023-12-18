function calcular() {

    const notas = 3;
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota1').value)
    let nota3 = parseFloat(document.getElementById('nota1').value)

    // let validation =  validate(nota1, nota2, nota3 ) 

    // if (!validation) {
    //     return
    // }

    let promedio = (nota1 + nota2 + nota3) / notas
    console.log(promedio)

    let evaluacio 

    if (promedio < 5 ) {
        evaluacio = `No has superado`
    } else if ( promedio <= 7) {
        evaluacio = `Has APROBADO`
    } else {
        evaluacio = `Enhorabona! Has superat el curs! Passa ja al següent nivell!"`
    }

}

function validate(num1, num2, num3) {
    return !isNaN(num1) && !isNaN(num2) && !isNaN(num3)//true
}