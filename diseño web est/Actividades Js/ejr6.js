//un cliente desea saber el precio de su compra si tiene un 15% de descuento//
function calcularPrecioFinal(precioTotal) {
    return precioTotal * 0.85;
}

let totalCompra = parseFloat(prompt("Ingrese el total de la compra:"));
let precioFinal = calcularPrecioFinal(totalCompra);
console.log("El precio final con descuento es: " + precioFinal);

