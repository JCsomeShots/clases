
let a = new String('Hola');
console.log(typeof a)
console.log(a)

let b = {}
console.log(b)

// Objeto no recomendable
let c = new Object()
console.log(c)
const nombre = 'Pepe';

// Creación Objecto
const juanca = {
    nombre: 'juanca',
    apellido: 'castillo',
    edad: 45,
    pasatiempos: ['nadar', 'leer', 'montaña', 'birrastime'],
    alto: false,
    contacto : {
                email: 'jcsomeshots@gmail.com',
                insta: '@jcsomeshots'
            },

    saludar: function() {
        console.log('Hola :)  ')
    },

    saludarUnaPersona: function(nom) {
        console.log(`Hola ${nom}`)
    },

    describirme: function() {
        console.log(`Hola, me llamo ${this.nombre} 
                    y no me llamo ${nombre};
                    y también me gusta ir a ${this.pasatiempos[0]}
                    pueden seguirme en instagram ${this.contacto.insta}
                    `)
    }
}

//console.log(juanca['nombre'])
console.log(juanca.nombre)
juanca.nombre = 'Jorge'
console.log(juanca.nombre)
console.log(juanca.apellido)
console.log(juanca.alto)
console.log(juanca.pasatiempos)
console.log(juanca.pasatiempos[2])
console.log(juanca.contacto.email)

juanca.saludar()
juanca.saludarUnaPersona('Aramis')
juanca.describirme()


console.log(juanca.nacimiento) // undefined

// has Own Property - Boolean
console.log(juanca.hasOwnProperty('contacto')) // output : true 
console.log(juanca.hasOwnProperty('nacimiento')) // false 

console.log(   Object.keys(juanca)       ) // keys = llaves/clave     output = [....]
console.log(   Object.values(juanca)     ) // values = valores      output = [....]

Number.parseInt('7')

//********************************* */
//********************************* */
//********************************* */
//********************************* */
//********************************* */
//********************************* */
//********************************* */
//********************************* */
//********************************* */


// Función declarada
myFunction();

function myFunction() {
    console.log('soy una función declarada')
}

myFunction();


// Función Expresada
//myFunction2();

const myFunction2 = function() {
    console.log('soy una función Expresada')
}
myFunction2();


// arrow function
// saludar()
const saludar = () => {
    console.log('soy una ARROW función')
} 

saludar()


// function sumar (x , y) {
//     return x + y
// }

const sumar = (x, y) => x + y 
