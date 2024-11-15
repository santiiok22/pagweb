<html>
   <head> <title> Ejercicios php </title> </head>
   <body>

<h2> Crear un script en php que simplemente muestre "Hola Mundo" en la pantalla </h2>
<?php
   echo "Hola mundo";
   echo "<center> <h1> Hola </h1> </center>";
  
   $var=5;
   $var2=10;
   echo "La suma es: ", $var+$var2;


?> 

<h2> Crear un programa en php que calcule la suma, resta, multiplicacion y division de 2 numeros </h2>
<?php
   $n=5;
   $n2=10;

   echo "Usando el numero ",$n," y el numero ",$n2,"<br>";
   echo "Su suma es: ",$n+$n2, " su resta es: ",$n-$n2, " su multiplicación: ",$n*$n2, " y su división: ",$n/$n2;
?>

<h2> Crear un programa en php que tome un numero y determine si es negativo, positivo o 0 </h2>
<?php
   $n=0;

   echo "Su numero es: ",$n, "<br>";
   if($n>0) {
      echo "Este numero es positivo";
   } if ($n==0) {
      echo "Este numero es neutro";
   } else {
      echo "Este numero es negativo";
   }
?>

<h2> Crear un programa en php que tome 3 numeros e indique cual es el mayor de ellos</h2>
<?php
   $num=1;
   $num2=1;
 
   echo "Se vera si los numeros son iguales o desiguales<br>";
 
   if($num>$num2) {
     echo "El numero 1 es mayor que el numero 2";
   }else if ($num2>$num) {
     echo "El numero 2 es mayor que el numero 1";
   }else if ($num=$num2) {
     echo "Son iguales";
   }
?>

<h2> Crear un programa en php que ingreses tu edad y te diga si eres niño, adolescente, adulto o anciano</h2>
<?php
  $edad=50;
  echo "Con este programa se determinara su etapa de vida<br>";

  if($edad>0 && $edad<12) {
    echo "Usted es un niño";
  } else if ($edad>12 && $edad<17) {
    echo "Usted es un adolescente";
  } else if ($edad>17 && $edad<64) {
    echo "Usted es un adulto";
  } else if ($edad>64 && $edad<100) {
    echo "Usted es un anciano";
  }
?>

<h2> Crear un programa en php que reciba un numero y determine si es par o impar </h2>
<?php
   $num=6;
   echo "En este programa determinaremos si su numero es par o impar<br>";

   if ($num%2==0) {
    echo "Su numero es par";
   } else {
    echo "Su numero es impar";
   }
  
?>

<h2> Crear un programa en php que genere la tabla de multiplicar </h2>
<?php
   $num=5;
   echo "En este programa mostraremos toda la tabla del 5";
   
   for ($i=0; $i<11 ; $i++) {
    $tabla=$i*$num;
    echo "(",$i,") = ",$tabla;
   }
?>

<h2> Crear un programa en php que con un bucle while sume los numeros del 1 al 100 </h2>
<?php
   $sum=0;
   $i=1;

   while ($i <= 100) {
    $sum+=$i;
    $i++;
   }
   
   echo "La suma de los numeros es: $sum";
  
?>

</body>
</html>