function paroImpar(){
    let mensaje = '';

    for (let i = 100; i >= 0; i-=2) {
        mensaje += i + ','
    }
    
    document.getElementById('resultado').innerHTML = mensaje
}