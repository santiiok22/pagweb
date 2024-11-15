//cantidad de tiempo que tardó en corregir los cuestionarios de sus alumnos//
alert("Un profesor creo 3 cuestionarios: A, B y C, tarda 5 minutos en corregir el A, 8 en el B y 6 en el C.");
var A =parseInt(prompt("Ingrese la cantidad de cuestionarios A que debe corregir."));
var B =parseInt(prompt("Ingrese la cantidad de cuestionarios B que debe corregir."));
var C =parseInt(prompt("Ingrese la cantidad de cuestionarios C que debe corregir."));
var MA=(A*5);
var HA=(A*5)/60;
var MB=(B*8);
var HB=(B*8)/60;
var MC=(B*5);
var HC=(B*5)/60;
document.write("Se tardo: "+HA+" hora(s) y "+MA+" minutos, para el B tardo: "+HB+" hora(s) y "+MB+" minutos y para el C tardo: "+HC+" hora(s) y "+MC+" minutos");