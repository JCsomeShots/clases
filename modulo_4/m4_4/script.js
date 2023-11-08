function calcularMes() {

    let numeroMes = parseInt(document.getElementById('mes').value);
    let result =  document.getElementById('result');
    let message = ''
    console.log(numeroMes);

    if (numeroMes < 1 || numeroMes > 12 ) {

        result.innerHTML= '';
        document.getElementById('validation').innerHTML = 'Debe introducir un número válido';

    } else {

        switch (numeroMes) {
            case 1: 
                message = 'Enero tiene 31 días';
                break;
            case 2: 
                message = 'Febrero tiene 28/29';
                break;
            case 3 :
                message = 'El mes de marzo tiene 31 días'
                break;
            case 4 :
                message = 'El mes de abril tiene 30 días'
                break;
            case 5 :
                message = 'El mes de mayo tiene 31 días'
                break;
            case 6 :
                message = 'El mes de junio tiene 30 días'
                break;
            case 7 :
                message = 'El mes de julio tiene 31 días'
                break;
            case 8 :
                message = 'El mes de agosto tiene 31 días'
                break;
            case 9 :
                message = 'El mes de setiembre tiene 30 días'
                break;
            case 10 :
                message = 'El mes de octubre tiene 31 días'
                break;
            case 11 :
                message = 'El mes de noviembre tiene 30 días'
                break;
            case 12 :
                message = 'El mes de diciembre tiene 31 días'
                break;
            default:
                message = 'Feliz año'
        }

        document.getElementById('validation').innerHTML = '';
        result.innerHTML = message;

    }
}