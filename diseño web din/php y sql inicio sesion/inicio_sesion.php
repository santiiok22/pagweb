<?php
session_start();

// Conexion a la base de datos
$servidor = "localhost"; //Servidor local
$usuarioBD = "root"; //Usuario de la base de datos
$passwordBD = ""; //Contraseña de la base de datos
$base_datos = "login"; //Nombre de la base de datos

$conn = new mysqli($servidor, $usuarioBD, $passwordBD, $base_datos);

if ($conn->connect_error) {
    die("Conexion fallida: ". $conn->connect_error);
}

//Datos del formulario
$usuario = $_POST['usuario'];
$password = $_POST['password'];

//consulta a la bd
$sql = "SELECT * FROM usuarios WHERE usuario = '$usuario' AND password = '$password'";

//enviando consulta con query
$resultado = $conn->query($sql);

//verificar si el usuario existe y la contraseña es correcta y direccionamiento a la página
if ($resultado->num_rows > 0) {
    $_SESSION['usuario'] = $usuario; echo "Sesión iniciada correctamente. Bienvenido, ". $_SESSION['usuario'];
    echo "<br><a href='perfil.php'> Ir a tu perfil</a>";
} else {
    echo "Usuario o contraseña incorrectos.";
    echo "<br><a href='pagina1.html'>Intentar nuevamente</a>";
}

//cerrar la conexion
$conn->close();

?>