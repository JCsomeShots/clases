function calcular() {

    let natural = document.getElementById('num').value 
    let result = document.getElementById('result')

    if (natural < 0 || isNaN(natural)) {
        result.innerHTML = 'El número no puede ser negativo'
        return;
    } 

    let base = 1;
    for (let i = 2; i <= natural; i++){
        base *= i;
    }

    result.innerHTML = base
}