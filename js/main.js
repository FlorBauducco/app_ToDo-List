/* var nombrePerrito = "Simon"; // Variable non-block scope (puede ser accedidos en cualquer parte del codigo) - reutilizar y renombrar
let nombrePersona = "Flor"; // Variables block scope (pueden ser modificadas dentro de un bucle, fuera no) - reutilizar y renombrar
const descuentos = 20; // Variables constantes - block scoped - reutilizar pero no renombrar */

// Novio te ama
// Modulo operator %
//Numeros del 1 al 20 - si es par o impar

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(`El número ${i} es par`);
//   } else {
//     console.log(`El número ${i} es impar`);
//   }
// }

//Ejercicio FizzBuzz - Iteracion del 1 al 100, si el numero es multiplo de 3 'Fizz' , si el numero es multiplo 5 'Buzz?, si el numero es multiplo de los 2 'FizzBuzz' Un ej: 15, 30

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(` - ${i} - FizzBuzz`);
//   } else if (i % 5 === 0) {
//     console.log(` - ${i} - Buzz`);
//   } else if (i % 3 === 0) {
//     console.log(` - ${i} - Fizz`);
//   }
// }

const productos = ["nails", "eyebrows"];

productos.push("hair");

console.log(productos);
