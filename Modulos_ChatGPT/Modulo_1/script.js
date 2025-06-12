// #1 - Ejemplo de delcaración de variables en JavaScript

var nombreUsuario = "Dairo"; // Forma antigua de declarar variables
let edad = 28; // Forma moderna de declarar variables
const pais = "Colombia"; // Constante, no se puede cambiar
let activo = true; // Variable booleana

// #2 - Ejemplo de operaciones con variables

let numero1 = 10;
let numero2 = 5;

let suma = numero1 + numero2; // Suma
let resta = numero1 - numero2; // Resta 
let multiplicacion = numero1 * numero2; // Multiplicación
let division = numero1 / numero2; // División

console.log("Nombre de usuario: ", nombreUsuario);
console.log("Edad: ", edad);
console.log("País: " + pais);
console.log("Activo: ", activo);
console.log("Suma: ", suma); // Se usa coma para mantener el tipo de dato
console.log("Suma: " + suma); // Se usa más y se convierte a string, es menos eficiente
console.log("Resta: ", resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);

// #3 - Ejemplo de funciones en JavaScript
const anioNacimiento = 1996;
const anioActual = 2024;
console.log(`La edad es ${anioActual - anioNacimiento} años`); // Opcion 1

// Opción 2: Definición de una función para calcular la edad
function calcularEdad(anioNacimiento, anioActual) {
    console.log(`La edad es ${anioActual - anioNacimiento} años`);
}
calcularEdad(anioNacimiento, anioActual); // Llamada a la función