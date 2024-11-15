//calcular la cantidad total de segundos según las horas, minutos y segundos//
function calcularSegundos(horas, minutos, segundos) {
    return (horas * 3600) + (minutos * 60) + segundos;
}

let horas = parseInt(prompt("Ingrese las horas:"));
let minutos = parseInt(prompt("Ingrese los minutos:"));
let segundos = parseInt(prompt("Ingrese los segundos:"));
let totalSegundos = calcularSegundos(horas, minutos, segundos);
console.log("Total de segundos: " + totalSegundos);

