//Crea un programa que use un bucle while para pedir al usuario que ingrese numero. El programa debe continuar sumando los números hasta que el usuario ingrese 0//
let n;
let suma=0;

while (true) {
    n = parseInt(prompt("Ingresa un numero (Para finalizar ponga 0)"));

    if (n === 0) {
        break;
    }
    suma+=n;
}

console.log("La suma total es: "+ suma);
alert("La suma total es: "+ suma);