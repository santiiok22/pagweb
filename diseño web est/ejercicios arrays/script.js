let array = []; // Inicializar arreglo vacío

// 1. Crear arreglo aleatorio
function ejercicio1() {
  array = [];
  for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  document.getElementById("resultado1").textContent = `Arreglo creado: [${array}]`;
}

// 2. Mostrar primer y último elemento
function ejercicio2() {
  if (array.length === 0) {
    document.getElementById("resultado2").textContent = "El arreglo está vacío.";
  } else {
    document.getElementById("resultado2").textContent = 
      `Primer elemento: ${array[0]}, Último elemento: ${array[array.length - 1]}`;
  }
}

// 3. Cambiar tercer elemento
function ejercicio3() {
  if (array.length >= 3) {
    array[2] = 999; // Cambiar tercer elemento
    document.getElementById("resultado3").textContent = `Arreglo modificado: [${array}]`;
  } else {
    document.getElementById("resultado3").textContent = "El arreglo no tiene suficientes elementos.";
  }
}

// 4. Agregar elemento al final
function ejercicio4() {
  array.push(50); // Agregar un número al final
  document.getElementById("resultado4").textContent = `Elemento agregado: [${array}]`;
}

// 5. Eliminar último elemento
function ejercicio5() {
  if (array.length > 0) {
    array.pop(); // Eliminar el último elemento
    document.getElementById("resultado5").textContent = `Elemento eliminado: [${array}]`;
  } else {
    document.getElementById("resultado5").textContent = "El arreglo está vacío.";
  }
}

// 6. Imprimir elementos
function ejercicio6() {
  document.getElementById("resultado6").textContent = `Elementos del arreglo: [${array}]`;
}

// 7. Sumar elementos
function ejercicio7() {
  let suma = array.reduce((acc, num) => acc + num, 0);
  document.getElementById("resultado7").textContent = `Suma de elementos: ${suma}`;
}

// 8. Duplicar elementos
function ejercicio8() {
  let duplicados = array.map(num => num * 2);
  document.getElementById("resultado8").textContent = `Arreglo duplicado: [${duplicados}]`;
}

// 9. Filtrar pares
function ejercicio9() {
  let pares = array.filter(num => num % 2 === 0);
  document.getElementById("resultado9").textContent = `Elementos pares: [${pares}]`;
}
