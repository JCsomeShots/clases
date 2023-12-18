function verificar() {

    const year = document.getElementById('year').value;
    let result = document.getElementById('resultado');

    if (year % 400 === 0) {
        result.innerHTML = 'El año ' + year + ' es bisiesto';
    } else if ( year % 4 === 0 && year % 100 !== 0) {
        result.innerHTML = 'El año ' + year + ' es bisiesto';
    } else {
        result.innerHTML = 'El año ' + year + ' NO es bisiesto';
    }
    
}