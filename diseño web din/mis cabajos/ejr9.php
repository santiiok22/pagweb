<html>
    <head> <title> Ingresar un numero y que te diga cuantos negativos son </title> </head>
    <body> 

   <?php
   $cont=0;

   do{
       $num= -4;

       if ($num < 0) {
           $cont++;
       }

   } while ($num >= 0);

   echo "Ingresaste $cont numeros negativos";
?>
</body>
</html>