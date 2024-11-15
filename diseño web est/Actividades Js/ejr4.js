//porcentaje de hombres y mujeres//
alert("Un maestro debe saber el porcentaje hombres y mujeres en una clase.");
var cant=parseInt(prompt("pero primero definamos la cantidad de personas que hay en su salon."));
var hom=parseInt(prompt("Ingrese la cantidad de hombres."));
var muj=parseInt(prompt("Ahora ingrese la cantidad de mujeres."));
var porh=(hom/cant)*100;
var porm=(muj/cant)*100;
document.write("El porcentaje de hombres es de: "+porh+"%, y el de mujeres es de: "+porm+"%.");