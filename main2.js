// console.log(globalVar);
const nombres = ["Adrian", "Juan", "Maria"];
const collecionCompleja = ["Adrian", ["Juan", "Maria", ["Luis", "Ana", "Carlos"]]];
const edades = [37, 40, 20];
nombres.push("Luis");
nombres.pop();
// console.log(nombres);
// const adrian = nombres[0];
// console.log(adrian);
// const maria = nombres[2];
// console.log(maria);

// Usando el for
// for (let i = 0; i < edades.length; i++) {
//     if (edades[i] > 18) {
//         console.log(edades[i]);
//         break;
//     }
// }

// Usando for...of
// for (const nombre of nombres) {
//     console.log(nombre);
// }

// Usando forEach
// nombres.forEach((nombre) => {
//     console.log(nombre);
// });

// Usando map
// edades.map permite crear un nuevo array aplicando una función a cada elemento del array edades
// const edadesDobladas = edades.map((edad) => edad * 2);
// console.log(edadesDobladas);

// Usando el filter
// edad es un parámetro que representa cada elemento del array edades
// const mayoresDeEdad = edades.filter((edad) => edad > 18);
// console.log(mayoresDeEdad);

// Usando el find
// find devuelve el primer elemento que cumpla con la condición especificada en la función de callback
// const primerMayorDeEdad = edades.find(edad => edad > 18);
// console.log(primerMayorDeEdad);

// Usando findIndex
// findIndex devuelve el índice del primer elemento que cumpla con la condición especificada en la función de callback
// const indicePrimerMayorDeEdad = edades.findIndex(edad => edad > 50);
// console.log(indicePrimerMayorDeEdad);

// Usando findLastIndex
// findLastIndex devuelve el índice del último elemento que cumpla con la condición especificada en la función de callback
// const indiceUltimoMayorDeEdad = edades.findLastIndex(edad => edad > 18);
// console.log(indiceUltimoMayorDeEdad);

// Usando includes
// includes verifica si un elemento existe en el array
// const tieneAdrian = nombres.includes("adrian");
// console.log(tieneAdrian);

// Usando reduce
// reduce aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor
// console.time("sumaEdades");
// const sumaEdades = edades.reduce((acumulador, edad) => acumulador + edad, 0);
// console.log(sumaEdades);
// console.timeEnd("sumaEdades");

// Usando some
// some verifica si al menos un elemento del array cumple con la condición especificada en la función de callback
// const hayMayoresDeEdad = edades.some(edad => edad > 18);
// console.log(hayMayoresDeEdad);

// Usando every
// every verifica si todos los elementos del array cumplen con la condición especificada en la función de callback
// const todosMayoresDeEdad = edades.every(edad => edad > 18);
// console.log(todosMayoresDeEdad);

// Usando flat
// flat aplana un array anidado en un solo nivel
// const collecionAplanada = collecionCompleja.flat(Infinity);
// console.log(collecionAplanada);

// const edades = [37, 40, 20];
// Resultado esperado: [80, 40]

// const ejemplo = edades
//     .filter(edad => edad % 2 === 0)
//     .map(edad => edad * 2);
// console.log(ejemplo);

// const ejemploFlatMap = edades.flatMap(edad => edad % 2 === 0 ? [edad * 2] : []);
// console.log(ejemploFlatMap);

// Objetos

const persona = {
    nombre: "Adrian",
    edad: 37,
    ciudad: "Madrid",
    200: "valor",
    hijos: {
        nombre: "Hijo 1",
        edad: 10
    }
};

// Accediendo a las propiedades del objeto

// const nombre = persona.200;
// console.log(persona.nombre);

// Usando Object.keys para obtener las claves del objeto
// console.log(Object.keys(persona));

// Usando Object.values para obtener los valores del objeto
// console.log(Object.values(persona));

// Usando Object.entries para obtener las entradas del objeto
// console.log(Object.entries(persona));

// Usando for in
// for (const clave in persona) {
//     console.log(`${clave}: ${persona[clave]}`);
// }

console.log(persona);
// const personaCopia = Object.assign({}, persona);
// let personaCopia = JSON.stringify(persona);
// personaCopia = JSON.parse(personaCopia);
const personaCopia = structuredClone(persona);
persona.nombre = "Adrian 2";
persona.hijos.nombre = "Hijo 1 Modificado";
console.log(persona);
console.log(personaCopia);