const divresult = document.getElementById('result')

function convertirTemp(celsiusTemp) {
    return ( celsiusTemp * 9/5 ) + 32 
}


function main() {
    const celsiusTemp = parseFloat(document.getElementById('temp').value)

    if (isNaN(celsiusTemp) ) {
        divresult.innerHTML = 'introduce un caracter numérico'
        return;
    } 
    
    let farenTemp = convertirTemp(celsiusTemp)
    divresult.innerHTML = farenTemp + ' f'
    return (farenTemp)
}