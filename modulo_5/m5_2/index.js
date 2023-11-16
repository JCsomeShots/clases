function calcular(){

    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let result = 0 // Number 
    let varAux = 0

    if (num1 > num2) { // reasignación de variables
        varAux = num1;
        num1 = num2;
        num2 = varAux;
    } 

    for (let i = num1; i <= num2; i++) {
            result += i
    }

    document.getElementById('valor-final').innerHTML = result

}