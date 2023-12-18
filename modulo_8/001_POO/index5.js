// var i
// let h 
// const t = []


// function firstFunction() {
//     return
// }


// firstFunction()


// let resultSuma = (a, b) => { 
//     return a + b 
// }
// console.log( resultSuma(10, 23) )


// let unicParam = x => console.log(x)
// unicParam('Hola que tal')


// let sum = 0;
// const numbersArray = [65, 44, 12, 4]; // array 


// numbersArray.forEach( (item) => { sum += item } );

// document.getElementById("demo").innerHTML = `La suma de todos los números del array es ${sum}`;

// function myFunction(item) {
//     sum += item;
// }


// Herencia 
// 1 - Animal / 2 - Mamifero / 3 - Perro / 4 - Bulldog

class Animal {

    constructor(_nombre, _raza) {
        this._nombre = _nombre;
        this._raza = _raza;
    }

     // getters
    get nombre() {
        return this._nombre
    }
    get raza(){
        return this._raza
    }

    set raza(raza){
        this._raza = raza
    }

    sonar() {
        console.log('Hago sonidos');
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y mi raza es ${this.raza}`)
    }
}


// Herencia.
class Perro extends Animal {

    constructor(_nombre, _raza, _medida) {
        super(_nombre, _raza);
        this._medida = _medida;
    }


    get medida(){
        return this._medida
    }

    // setters
    set medida(x) {
        let pass = prompt('Pass')
        if (pass) {
            this._medida = x
        }
    }

    sonar() {
        console.log('Soy un perro y ladro')
    }
}


const Scooby = new Perro('Scooby', 'Gran danés', 'grande')

Scooby.sonar()
Scooby.saludar()


function change() {

    let medida = document.getElementById('str').value
    console.log(Scooby)
    Scooby.medida = medida
    // Scooby.raza = 'Chihuahua'
    console.log(Scooby.medida)
    console.log(Scooby)
}

