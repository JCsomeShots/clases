function fibonacci() {
    const numero = parseInt(document.getElementById('number').value)
    let resultado = []
    let num1 = 0
    let num2 = 1
    
    for (let i = 0; i < numero; i++) {
        resultado.push(num1);
        [num1, num2] = [num2, num1 + num2]; // operador y reasigna
    }

    document.getElementById('resultado').innerText = `La successió de Fibonacci de ${numero} es ${resultado}`

}