//longitud de circunferencia de un circulo//
alert("Bienvenido, ingrese un numero que sera usado como radio de un circulo para reportar el area y longitud de circunferencia.")
var rad = parseInt(prompt("Ingrese aqui el radio."));
var pi=3.14;
var area=pi*(rad*rad);
var long=(2*pi)*rad;
document.write("El area es de: "+area+" y su longitud es de: "+long);