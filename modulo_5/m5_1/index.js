let numero = parseInt(document.getElementById('num').value )
let insertarInput = document.getElementById('insertarInput')
let paraElBoton = document.getElementById('paraElBoton')
let inputSolo
let createBoton
const arrayFinal = []


function crearInputs(){

    for (let i = 0; i < numero; i++) {

        inputSolo = document.createElement('input');
        inputSolo.className = 'new-input'
        inputSolo.placeholder = 'Escriba una palabra'

        insertarInput.appendChild(inputSolo)
    }

    createBoton = document.createElement('input')
    createBoton.type = 'button'
    createBoton.value = 'Captura input'

    paraElBoton.appendChild(createBoton)

    // Add Event 
    createBoton.addEventListener('click', function() {

        let inputs = document.querySelectorAll('input[class="new-input"]')

        for (let j = 0 ; j < inputs.length; j++) {

            let catchInput = inputs[j]
            arrayFinal.push(catchInput.value)
            console.log(arrayFinal)
        }

    })
}
