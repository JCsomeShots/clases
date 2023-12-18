class Persona {
        constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    
        // Función privada
        const validarNombre = nuevoNombre => {
            let val = confirm('quieres cambiar el nombr')
            console.log(val)
            if (typeof nuevoNombre === 'string' && nuevoNombre != '' && val) {
            this._nombre = nuevoNombre;
            } else {
            console.error('El nombre debe ser una cadena de caracteres.');
            }
        };
    
        // Getter y setter utilizando la función privada
        this.getNombre = () => this._nombre;
        this.setNombre = nuevoNombre => validarNombre(nuevoNombre);
    
        // Getter y setter de edad
        this.getEdad = () => this._edad;
        this.setEdad = nuevaEdad => {
            if (nuevaEdad > 0) {
            this._edad = nuevaEdad;
            } else {
            console.error('La edad debe ser un número positivo.');
            }
        };
        }
}
  
  const persona1 = new Persona('Juan', 25);
  
  console.log(persona1.getNombre());  // Getter: Juan
  console.log(persona1.getEdad());    // Getter: 25
  
  persona1.setNombre('Jacinto');  // Setter: Se cambia el nombre a Jacinto
  console.log(persona1.getNombre());  // Getter: Jacinto
  
  persona1._nombre = '';  // Intento de cambio directo (no afecta)
  console.log(persona1.getNombre());  // Getter: Jacinto
  