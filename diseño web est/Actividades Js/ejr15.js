//Crea un programa que pida al usuario ingresar una contraseña utilizando un bucle do-while hasta que la contraseña sea correcta.//
const controk = "123";
var contr;

do {
    contr = prompt("Ingrese la contraseña correcta: ");
} while (contr != controk);

console.log("Contraseña correcta");
alert("Contraseña Correcta");