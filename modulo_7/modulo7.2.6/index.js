function esPrimo(n){
    let count = 0
    let isTrue = false
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++
        }
    }

    if (count == 2) {
        isTrue = true
    } 

    return isTrue
}

function empezar(){

    let num = '';

    do {
        num = parseInt(prompt('Un número'))
    } while (!esPrimo(num))

    document.getElementById('result').innerHTML = `El número ${num} es Primo`
}
