<html>
    <head> <title> Porcentaje </title> </head>
    <body> 

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
</body>
</html>