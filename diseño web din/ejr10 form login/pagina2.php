<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style>
    body{background-color: purple;
    color: black;
    font-size:40px; }
</style>
</head>
<body>
    <h1> Validación de datos </h1>

<?php
session_start();

$usuario = $_POST['usuario'];
$password = $_POSTdd['password'];

$usuario_valido = "Carlo Montenegro";
$password_valido = "el aplauso señore";

if ($usuario == $usuario_valido && $password == $password_valido) {

    $_SESSION['usuario'] = $usuario;
    echo "Bienvenido patrón " . $_SESSION['usuario'];
    echo "<br><a href='perfil.php'> Ir a tu perfil </a>";
    } else {

        echo "Usuario o contraseña incorrectos";
        echo "<br><a href='pagina1.html'> Intentar nuevamente</a>";
    }

    ?>

</body>
</html>