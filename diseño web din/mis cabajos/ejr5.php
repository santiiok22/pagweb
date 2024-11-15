<html>
    <head> <title> Programa de edad </title> </head>
    <body> 

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
</body>
</html>