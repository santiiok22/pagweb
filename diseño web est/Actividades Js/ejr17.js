//Escribe un programa que use un bucle do-while para mostrar un menu de opciones al usuario. El bucle debe seguir ejecutandose hasta que el usuario seleccione la opcion de salir//
function ejercicio17() {
    let opcion;
    
    do {
      opcion = prompt("Menú de opciones:\n1. Ver opción 1\n2. Ver opción 2\n3. Salir");
      
      switch(opcion) {
        case '1':
          alert("Opción 1 seleccionada");
          break;
        case '2':
          alert("Opción 2 seleccionada");
          break;
        case '3':
          alert("Saliendo...");
          break;
        default:
          alert("Opción no válida, intente nuevamente.");
      }
    } while(opcion !== '3');
  }
  