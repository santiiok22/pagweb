//nota de prueba para ver si el alumno aprobó o no//
alert("En esta pagina se vera si aprobo o no, pero usted debe ingresar sus notas.");
alert("Si no tiene mas de 70 es porque usted es un boludo.");
var not1 = parseInt(prompt("Ingrese su nota de examen aqui."));
var not2 = parseInt(prompt("Ingrese su nota de tp aqui."));
var not3 = parseInt(prompt("Ingrese su nota final aqui."));
var prom = (not1+not2+not3)/3;
if (prom>69) {
    document.write("Felicidades, usted aprobo con un promedio de: "+prom+".");
}else{
    document.write("Boludoooooo desaprobaste con un promedio de: "+prom+".");
}