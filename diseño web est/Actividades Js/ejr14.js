//Crea un programa que use un bucle para calcular la suma de los primeros N numeros enteros//
let n= parseInt(prompt("Ingrese el valor de n: "));
let suma = 0;

for(var i=1; i<=n; i++) {
    suma +=i;
}

console.log("La suma de los primeros "+ n + " numeros es "+ suma);