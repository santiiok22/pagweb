//se multiplicaran 2 numeros iguales, se restara si el primero es mayor que el segundo y se sumaran si el primero es menor que el segundo//
alert("En esta pag se multiplicaran 2 numeros iguales, se restara si el primero es mayor que el segundo y se sumaran si el primero es menor que el segundo.");
var num1 = parseInt(prompt("Ingrese el primer numero aqui."));
var num2 = parseInt(prompt("Ingrese el segundo numero aqui."));

if (num1=num2) {
    document.write("El resultado de su multiplicacion es: "+(num1*num2)+".");
}if (num1>num2) {
    document.write("El resultado de su resta es: "+(num1-num2)+".");
} if (num1<num2) {
    document.write("El resultado de su suma es: "+(num1+num2)+".");
}