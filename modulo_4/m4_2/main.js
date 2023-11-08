function calcular() {

    let edat = parseInt(document.getElementById('edat').value);
    let mensaje = '';

    if (edat <= 5) {
        mensaje = 'Preescolar';
    } else if (edat <= 11) {
        mensaje = 'Primària';
    } else if (edat <= 15) {
        mensaje = 'ESO';
    } else if (edat <= 17) {
        mensaje = 'Batxillerat';
    } else {
        mensaje = 'FP o Universitat';
    }

    document.getElementById('resultado').innerHTML = mensaje;
}