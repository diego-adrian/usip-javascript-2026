// console.log("Hola a todos estoy aprendiendo javascript");
// saludar();
// function saludar(payload) {
//     const {nombre: nm, apellido, email, telefono, edad} = {...payload};
//     // console.log("Hola " + nombre + " " + apellido + " estoy aprendiendo javascript desde una funcion");
//     console.log(`Hola ${nm} ${apellido} ${email} ${telefono} ${edad} estoy aprendiendo javascript desde una funcion`);
// }

// saludar();
// saludar("Gomez", "Adrian");
// saludar({apellido: "Gomez", nombre: "Adrian", email: "adrian@example.com", telefono: "123456789", edad: 25});
// saludar("Pedro", "Lopez");
// saludar("Maria", "Martinez");
// saludar("Juan", "Perez");
// saludar2();
// const saludar2 = function() {
//     console.log("Hola a todos estoy aprendiendo javascript desde una funcion anonima");
// };

// saludar2();
// saludar3();
// const saludar3 = () => console.log("Hola a todos estoy aprendiendo javascript desde una funcion flecha");
// saludar3();

// const calcula = (a, b, operacion) => operacion(a, b);

// const suma = (a, b) => a + b;
// const resta = (a, b) => a - b;
// const multiplica = (a, b) => a * b;
// const divide = (a, b) => a / b;

// console.log(calcula(5, 3, suma));
// console.log(calcula(5, 3, resta));
// console.log(calcula(5, 3, multiplica));
// console.log(calcula(5, 3, divide));

// console.log(1);
// setTimeout(() => console.log(2), 5000);
// console.log(3);

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const ok = Math.random() > 0.5;
//     ok ? resolve("¡Listo!") : reject("Falló");
//   }, 5000);
// });

// promesa
//   .then(valor => console.log(valor))
//   .catch(error => console.log(error));

// fetch("https://jsonplaceholder.typicode.com/users/10")
//   .then(res => {
//     if (!res.ok) throw new Error("HTTP " + res.status);
//     return res.json();
//   })
//   .then(data => {
//     console.log(data.company); // "data"
//   })
//   .catch(error => console.error(error))
//   .finally(() => console.log("Terminado"));


const API = "https://jsonplaceholder.typicode.com";

async function obtenerUsuario(id) {
  try {
    const res = await fetch(`${API}/users/${id}`);
    const datos = await res.json();
    console.log(datos);
  } catch (error) {
    console.error("Algo falló:", error.message);
  }
}
// create promise with setTimeout
function promesaConTimeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
    
    // await obtenerUsuario(1);
    // await promesaConTimeout(5000); // wait 2 seconds
    // await obtenerUsuario(2);
    // await promesaConTimeout(2000); // wait 2 seconds
    // await obtenerUsuario(3);
    console.time("main");
    await Promise.all([
        obtenerUsuario(1),
        promesaConTimeout(5000),
        obtenerUsuario(2),
        promesaConTimeout(2000),
        obtenerUsuario(3)
    ]);
    console.timeEnd("main");
}

main();
