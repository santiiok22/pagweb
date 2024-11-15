//Determinar cuánto pagará una persona que compre manzanas en esa frutería//
function calcularPrecioManzanas(kilos, precioPorKilo) {
    let descuento = 0;
    if (kilos > 10) {
        descuento = 0.20;
    } else if (kilos > 5) {
        descuento = 0.15;
    } else if (kilos > 2) {
        descuento = 0.10;
    }
    return kilos * precioPorKilo * (1 - descuento);
}

let kilos = parseFloat(prompt("Ingrese la cantidad de kilos de manzanas:"));
let precioPorKilo = parseFloat(prompt("Ingrese el precio por kilo:"));
let totalAPagar = calcularPrecioManzanas(kilos, precioPorKilo);
console.log("El total a pagar es: " + totalAPagar);
