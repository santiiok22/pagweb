//En un almacén se hace un 20% de descuento a los clientes cuya compra supere los $100. ¿Cuál será la cantidad que pagará una persona por su compra?//
function calcularPrecioFinal(precioTotal) {
    if (precioTotal > 100) {
        return precioTotal * 0.80;
    } else {
        return precioTotal;
    }
}

let totalCompra = parseFloat(prompt("Ingrese el total de su compra:"));

let precioFinal = calcularPrecioFinal(totalCompra);

alert("El precio final a pagar es: $" + precioFinal.toFixed(2));