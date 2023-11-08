function mayorEdat() {
    let nom = document.getElementById('nom').value;
    let cognom = document.getElementById('cognom').value;
    let edat = parseInt(document.getElementById('edat').value);
    let mensaje = "";

    if (edat >= 18) {
        mensaje = `${nom} ${cognom}, ets MAJOR d'edat `;
    } else {
        mensaje = `${nom} ${cognom},  ets MENOR d'edat`;
    }

    document.getElementById('result').innerHTML = mensaje;
}
