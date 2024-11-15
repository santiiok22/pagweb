 //Ingresar un numero que se tomará como hora y se calculará la cantidad de minutos y segundos en base a eso//
 document.write("Bienvenido, ingrese un numero que se tomara como hora y se calculara la cantidad de minutos y segundos");
 var hora=parseInt(prompt("Ingrese un numero."));
 var minutos=hora*60;
 var segundos=minutos*60;
 alert("La cantidad de minutos es de: "+minutos+" y la cantidad de segundos es de: "+segundos);