const caracter = '*';

function construir() {
    let num = document.getElementById('num').value;
    let result = '';

    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num - i; j++) {
            result += '*';
        }
        result += '<br>';
    }
    document.getElementById('result').innerHTML = result;
}