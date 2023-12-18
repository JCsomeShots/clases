// // POO

// // Objetos 
//     // Propiedades - Var 
//     // Métodos - Function

// const Cristian = {
//     // key => value
//     nom: 'Cristian',
//     apellido: 'Rodri',
//     pasatiempos: ['estudiar JS', 'GetElementByID'],
//     consolaWrite: true,
//     direc: {
//         calle: 'Buenos Aires',
//         num: 54
//     },

//     conducir: function() {
//         console.log('Un peugeot')
//     },

//     cocinar: function() {
//         console.log('Que remedio')
//     },

//     descrip : function() {
//         console.log(`Hola me llamo ${this.nom}`)
//     }
// }



// console.log(Cristian.nom)
// console.log(Cristian.apellido)
// console.log(Cristian.pasatiempos)
// console.log(Cristian.pasatiempos[0])
// console.log(Cristian.pasatiempos[1])
// console.log(Cristian.consolaWrite)
// console.log(Cristian.direc.calle)
// console.log(Cristian.direc.num)

// Cristian.conducir()
// Cristian.cocinar()
// Cristian.descrip()


// console.log( Object.keys(Cristian) )
// console.log( Object.values(Cristian) )



// function perro() {
//     console.log(this)
// }

// perro()



// const Gato = {
//     nombre: 'Bruna',

//     soyUn: function() {
//         console.log(this)
//     }, 
    
//     soyUnWindow: () =>  console.log(this)

// }

// Gato.soyUn();
// Gato.soyUnWindow();





const animal1 = {
    nombre: 'Snooopy',
    sonar() {
        console.log('Hago sonidos')
    }
}
console.log(animal1)

const animal2 = {
    nombre: 'Piolín',
    sonar() {
        console.log('Soy un pájaro y pio')
    }
}
console.log(animal2)

animal1.sonar()

const animal3 = {
    nombre: 'Charly',
    sonar() {
        console.log('Soy el dueño de Snoopy')
    }
}

// Función constructura
function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;
}

Animal.prototype.sonar = function() {
    console.log(`Hola me llamo ${this.nombre}`)
}

const BugBunny = new Animal('Bug Bunny', 'Macho')

console.log(BugBunny)
BugBunny.sonar()

const LolaBunny = new Animal('Lola Bunny', 'Hembra')
LolaBunny.sonar()

// function constructora a partir Animal
function Perro(nombre, genero, edad) {

    this.super = Animal;
    this.super(nombre, genero)
    this.edad = edad;
}

Perro.prototype = new Animal
Perro.prototype.constructor = Perro;

Perro.prototype.ladrar = function() {
    console.log('GUau GUUUauu!')
}


const Scooby = new Perro('Scooby', 'Macho', '11')
console.log(Scooby)

Scooby.sonar()
Scooby.ladrar()