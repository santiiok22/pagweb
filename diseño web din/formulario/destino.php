<html>
<head> <title> Formulario </title> </head>
<link rel="stylesheet" href="style.css">
<body>

<?php
$nom= $_POST["nombre"];
$ap= $_POST["apellido"];
$ed= $_POST["edad"];

echo "<h1> LOS DATOS INGRESADOS SON: <h1>";
echo "<h2> Nombre: ",$nom,"<h2>";
echo "<h2> Apellido: ",$ap,"<h2>";
echo "<h2> Edad: ",$ed,"<h2>";
?>

</body>
</html>