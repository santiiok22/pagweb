//Leer tres números diferentes e imprimir el número mayor de los tres//
alert("Se leeran 3 numeros diferentes y se escribira solo el mayor");
var num1 = parseInt(prompt("ingrese el num1"));
var num2 = parseInt(prompt("ingrese el num2"));
var num3 = parseInt(prompt("ingrese el num3"));

if (num3>num1 && num3>num2) {
    document.write("El mayor de todos es el: "+num3+".");
}
if (num2>num1 && num2>num3) {
    document.write("El mayor de todos es el: "+num2+".");
}
else{
    document.write("El mayor de todos es el: "+num1+".");
} 