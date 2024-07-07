// Función para convertir temperatura
function convertirTemperatura() {
  var nombreUsuario = document.getElementById("nombreUsuario").value;
  // Convertir la primera letra del nombre de usuario a mayúscula
  nombreUsuario = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1);
  
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9/5) + 32;
  var kelvin = celsius + 273.15;

  var resultados = document.getElementById("resultados");
  resultados.innerHTML = 'Hola ' + nombreUsuario + '! ' + 'la temperatura de ' + celsius + ' grados Celsius corresponden a ' + fahrenheit.toFixed(2) + ' grados Fahrenheit y ' + kelvin.toFixed(2) + ' Kelvin.';
  resultados.style.visibility = 'visible'; // Mostrar resultados
}