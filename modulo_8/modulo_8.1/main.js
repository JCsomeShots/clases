import { Ordenador } from "./ordinador.js";
// const o var globales.

const arrayComputers = []
let id = 0
const result = document.getElementById('result')


function crearOrdenador(){

    id++;
    let marca = prompt('Ingresa la marca')
    let modelo = prompt('Ingresa la modelo')
    let procesador = prompt('Ingresa la procesador')
    let discDur = prompt('Ingresa la discDur')
    let ram = prompt('Ingresa la ram')
    let val = confirm ('está ejecutando algún programa')
    let program
    if(val) {
        program = prompt('¿Cuál?')
    }

    const computer = new Ordenador(marca, modelo, procesador, discDur, ram, id)

    console.log(computer.toString())
    result.innerHTML += computer.toString()
    result.innerHTML += '<br>'
    
    result.innerHTML += computer.programa(program)
    result.innerHTML += '<br>'
    

    arrayComputers.push(computer)
}

function enEjecutionProgram(){
    arrayComputers[0].programa('finder')
}

document.getElementById('btn').addEventListener('click', crearOrdenador)

