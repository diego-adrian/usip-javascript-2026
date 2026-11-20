// console.log("Hola a todos estoy aprendiendo javascript");
const nombre = "Ana";
let edad = 20;
var globalVar = "Hola soy global";
edad = 21;  

function getLocalCharacters() {
  console.log("Fetching local characters");
}// OK: let cambia

// nombre = "Luis";  // Error: TypeError
// Assignment to constant variable
let esMayor = false;
let miCuenta = !0 || 1000;
console.log(miCuenta);

let ciudad;       // undefined
console.log(typeof ciudad);
ciudad = "La Paz";
console.log(nombre, edad, ciudad);
console.log(5 === "5");
// Ana 21 La Paz
let nota = 85;
let msg;
if (nota >= 90) {
  msg = "Excelente";
} else if (nota >= 51) {
  msg = "Aprobado";
} else if (nota < 51) {
  msg = "Reprobado";
} else {
  msg = "Nota inválida";
}
console.log(msg);

const res = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(res);