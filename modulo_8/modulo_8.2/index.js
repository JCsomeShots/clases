import { Hotel } from "./hotel.js";

const hoteles = [] // persistencia

function cleanUpInputs() {
    const inputs = document.querySelectorAll('input:not([type="button"])');
    inputs.forEach(input => input.value = '');
}

function cleanUpMessages() {
    const messages = document.querySelectorAll('.message')
    messages.forEach( message => message.innerHTML = '')
}

function getInputValues() {
    const nombre = document.getElementById('nomHotel').value;
    const numHab = parseInt(document.getElementById('numHabHotel').value);
    const numFloor = parseInt(document.getElementById('numHabFloor').value);
    const area = parseFloat(document.getElementById('numArea').value);

    return { 
        nombre: nombre, 
        numHab: numHab, 
        numFloor: numFloor, 
        area: area 
    };
}

function showHotelInfo(hotelActual) {

    const mantenimiento = hotelActual.calcularMantenimiento();

    const hotelInfo = `
        Nombre del hotel: <strong>${hotelActual.nom}</strong>
        Número de habitaciones: ${hotelActual.hab}
        Número de plantas: ${hotelActual.floor}
        Area: ${hotelActual.area} m2
        Servicio a contratar: ${mantenimiento.service} personas
        Costo de servicio: ${mantenimiento.costService} euros
    `
    return hotelInfo
}


function crearHotel() {

    const valores = getInputValues()
    const hotel = new Hotel(valores.nombre, valores.numHab, valores.numFloor, valores.area);
    
    hotel.calcularMantenimiento()
    
    cleanUpInputs()
    cleanUpMessages() 

    
    hoteles.push(hotel)
    console.log(hoteles)

    document.getElementById('nomHotel').focus();
}


function verificar(name) {
    const hotelEncontrado = hoteles.find( hotel => hotel.nom === name ) // Encontrar coincidencias

    let indexHotel 
    if (hotelEncontrado)  {
        indexHotel = hoteles.findIndex(hotel => hotel.nom === name)
    } else {
        indexHotel = -1
    }

    return indexHotel
}

function donarDeBaixaHotel() {
    
    const nameHotel = document.getElementById('nameHotel').value // input user
    cleanUpMessages() 

    let indexDelHotel = verificar(nameHotel) // verificar si existe on array

    if ( indexDelHotel != -1) { 
        const confirmacio = window.confirm(`Desea realmente eliminar el hotel ${nameHotel}`)
        
        if (confirmacio) {
            
            hoteles.splice(indexDelHotel, 1) // Borrado [2, 3, 4]
            console.log(hoteles)
            document.getElementById('messageErase').innerHTML = '<span style="color:green;"> El hotel ha sido borrado</span>'

        } else {
            document.getElementById('messageErase').innerHTML = '<span style="color:green;"> Operación cancelada</span>'
        }

    } else {
        document.getElementById('messageErase').innerHTML = '<span style="color:red;"> Hotel no encontrado </span>' // No coincidencias
    }

    cleanUpInputs()
}


function veureHotel() {

    const findHotel = document.getElementById('findHotel').value // input user

    cleanUpMessages() 

    let indexDelHotel = verificar(findHotel) // verificar si existe on array

    if ( indexDelHotel != -1) {

        let hotelActual = hoteles[indexDelHotel]
        const hotelInfo = showHotelInfo(hotelActual)
        document.getElementById('result').innerHTML = `<pre> ${hotelInfo} </pre>`

    } else {
        document.getElementById('messageRead').innerHTML = '<span style="color:red;"> Hotel no encontrado </span>' // No coincidencias
    }

    cleanUpInputs()
}


function modificarHotel() {

    cleanUpMessages()
    
    const updateHotel = document.getElementById('updateHotel').value // desde el user
    let indexDelHotel = verificar(updateHotel)

    if (indexDelHotel != -1) {

        let hotelActual = hoteles[indexDelHotel] // Hotel encontrado

        document.getElementById('nomHotel').value = hotelActual.nom
        document.getElementById('numHabHotel').value = hotelActual.hab
        document.getElementById('numHabFloor').value = hotelActual.floor
        document.getElementById('numArea').value = hotelActual.area

        modifiedHotel.style.display = 'block'
        submitHotel.style.display = 'none'

        window.scrollTo(0,0)
        document.getElementById('nomHotel').readOnly = true

    } else {
        cleanUpMessages()
        document.getElementById('messageUpdate').innerHTML = '<span style="color:red;"> Hotel no encontrado </span>' // No coincidencias
        cleanUpInputs()
    }

}

function actualizarHotel(){

    let valores = getInputValues(); // valor actual
    cleanUpMessages()

    const updateHotel = document.getElementById('updateHotel').value // desde el user
    let indexDelHotel = verificar(updateHotel)
    if (indexDelHotel != -1) {

        let hotelActual = hoteles[indexDelHotel]

        hotelActual.hab = valores.numHab
        hotelActual.floor = valores.numFloor
        hotelActual.area = valores.area

        const hotelInfo = showHotelInfo(hotelActual)
        document.getElementById('result').innerHTML = `<pre> ${hotelInfo} </pre>`
    }

}

/*********************************** */
// Catch Btn
let modifiedHotel = document.getElementById('modifiedHotel')
modifiedHotel.style.display = 'none'
let submitHotel = document.getElementById('submitHotel')


document.getElementById('submitHotel').addEventListener('click', crearHotel)
document.getElementById('eraseHotel').addEventListener('click', donarDeBaixaHotel)
document.getElementById('findHotelBtn').addEventListener('click', veureHotel)
document.getElementById('updateHotelBtn').addEventListener('click', modificarHotel)
modifiedHotel.addEventListener('click', actualizarHotel)
