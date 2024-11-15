<html>
    <head> <title> Sumar los numeros del 1 al 100 </title> </head>
    <body> 

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