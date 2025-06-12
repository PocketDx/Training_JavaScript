// SEMANA 2 --------------------------------------------------
// Tipos de datos primitivos en JavaScript

// Ejemplo de delcaración de variables en JavaScript
var nombreUsuario = "Dairo"; // Forma antigua de declarar variables
let edad = 28; // Forma moderna de declarar variables
const pais = "Colombia"; // Constante, no se puede cambiar
let activo = true; // Variable booleana

// Ejemplo de operaciones con variables
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

// Ejemplo de funciones en JavaScript
const anioNacimiento = 1996;
const anioActual = 2024;
console.log(`La edad es ${anioActual - anioNacimiento} años`); // Opcion 1

// Opción 2: Definición de una función para calcular la edad
function calcularEdad(anioNacimiento, anioActual) {
    console.log(`La edad es ${anioActual - anioNacimiento} años`);
}
calcularEdad(anioNacimiento, anioActual); // Llamada a la función

// SEMANA 3 --------------------------------------------------
// Estructuras de control en JavaScript

// Condicionales

// IF
const edadUsuario = 18;
if (edadUsuario >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// SWITCH
const dia = "Lunes";
switch (dia) {
    case "Lunes":
        console.log("Hoy es lunes");
        break;
    case "Miércoles":
        console.log("Es mitad de semana");
        break;
    default:
        console.log("No es lunes o miércoles");
}

// Bucle FOR
for (let i = 0; i < 5; i++) {
    console.log("Ciclo: #" + i);
}

// Bucle WHILE
let contador = 1;
while (contador < 5) {
    console.log("Contador: " + contador);
    contador++;
}

// Bucle DO WHILE
let contadorDo = 1;
do {
    console.log("Contador Do: " + contadorDo);
    contadorDo++;
} while (contadorDo < 5);

// SEMANA 4 --------------------------------------------------
// Funciones

function saludar(nombreUsuario) {
    console.log("Hola, " + nombreUsuario);
}
saludar(nombreUsuario); // Llamada a la función

// Función con parámetros y retorno
function sumar(a, b) {
    return a + b;
}
console.log("La suma es:", sumar(5, 10)); // Llamada a la función sumar

// Función anónima
const funcionAnonima = function(a, b) {
    return a * b;
};
console.log("Funcion anonima para multiplicar :", funcionAnonima(2, 4)) // Llamada a la función anónima

// Función flecha
const funcionFlecha = (a, b) => a / b;
console.log("Funcion flecha para dividir :", funcionFlecha(10, 2)); // Llamada a la función flecha

// Scope de variables
var variableGlobal = "Soy global"; // Variable global
let variableLocal = "Soy local"; // Variable local

console.log(variableGlobal); // Acceso a la variable global
console.log(variableLocal); // Acceso a la variable local

if (true) {
    var variableGlobalDentro = "Sigo siendo global"; // Sigue siendo global
    let variableLocalDentro = "Soy local dentro del if"; // Nueva variable local
    console.log(variableGlobalDentro);
    console.log(variableLocalDentro);
}

console.log(variableGlobalDentro); // Acceso a la variable global dentro del if
// console.log(variableLocalDentro); // Error: variableLocalDentro no está definida aquí

// SEMANA 5 --------------------------------------------------
// Arrays

let frutas = ["Manzana","Pera","Banana"];
console.log(frutas[0]);

let texto = [];
for (let i = 0; i < 3; i++){
    let palabra = prompt("Ingrese una palabra:");
    texto.push(palabra);
}

texto.forEach( texto => console.log("Palabra ingresada: ", texto) );

// SEMANA 6 --------------------------------------------------
// Objetos