<html>
    <head> <title> Tabla de multiplicar </title> </head>
    <body> 

   <?php
   $num=5;
   echo "En este programa mostraremos toda la tabla del 5";
   
   for ($i=0; $i<11 ; $i++) {
    $tabla=$i*$num;
    echo "(",$i,") = ",$tabla;
   }
?>
</body>
</html>