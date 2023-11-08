function calcularBeca() {

    let edat = parseInt(document.getElementById('edat').value);
    let titulo = document.getElementById('universitario').value;
    let atur = document.getElementById('atur').value
    atur = atur.toLowerCase();
    titulo = titulo.toLowerCase();
    let mensaje = '';

    // if (atur == 'si') {
    //     mensaje = 'Le han concedido una beca'
    // } else if (titulo == 'si' && edat >= 18) {
    //     mensaje = 'Le han concedido una beca'
    // } else {
    //     mensaje = 'No tiene la beca';
    // }

    if ((titulo == 'si' && edat >= 18) || atur == 'si' ) {
        mensaje = 'Le han concedido una beca'
    } else {
        mensaje = 'No tiene la beca';
    }

    document.getElementById('result').innerHTML = mensaje;

}


function calcularBeca2() {
    let edat = parseInt(document.querySelector("input[name='edat']").value);
    let universitario = document.querySelector("input[name = 'universitario']")
    let atur = document.querySelector('input[name = "atur"]')

    let mensaje = '';

    if ((universitario.checked && edat >= 18) || atur.checked) {
        mensaje = 'Le han concedido una beca';
    } else {
        mensaje = 'No tiene la beca';
    }

    document.getElementById('result').innerHTML = mensaje

    // console.log(edat);
    // console.log(universitario);
}