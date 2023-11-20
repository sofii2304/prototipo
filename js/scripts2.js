document.getElementById("myBtn").click();
function myFunction(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

function likeFunction(x) {
  x.style.fontWeight = "bold";
  x.innerHTML = "✓ Liked";
}
function buscar() {
  console.log("Botón de búsqueda clicado");

  // Obtener el valor de búsqueda
  var consulta = document.getElementById("busquedaInput").value.toLowerCase();
  
  // Obtener todos los elementos en los que buscar
  var elementos = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");

  // Contenedor para los resultados
  var contenedorResultados = document.getElementById("resultados");
  contenedorResultados.innerHTML = ""; // Limpiar resultados anteriores

  // Iterar sobre los elementos y mostrar los que coinciden con la búsqueda
  elementos.forEach(function(elemento) {
      var contenido = elemento.innerText.toLowerCase();

      if (contenido.includes(consulta)) {
          // Crear un nuevo elemento para mostrar el resultado
          var resultadoElemento = document.createElement("div");
          resultadoElemento.textContent = contenido;
          contenedorResultados.appendChild(resultadoElemento);
      }
  });
}
function calcularCientifica() {
  const input = document.getElementById('scientificNumber');
  const resultElement = document.getElementById('resultCientifica');

  try {
    const number = parseFloat(input.value);
    if (!isNaN(number)) {
      resultElement.textContent = `Resultado: ${number.toFixed(2)}`;
    } else {
      throw new Error('Ingrese un número válido en notación científica.');
    }
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
  }
}

function calcularDecimal() {
  const input = document.getElementById('decimalNumber');
  const resultElement = document.getElementById('resultDecimal');

  try {
    const number = parseFloat(input.value);
    if (!isNaN(number)) {
      resultElement.textContent = `Resultado: ${number.toExponential()}`;
    } else {
      throw new Error('Ingrese un número decimal válido.');
    }
  } catch (error) {
    resultElement.textContent = `Error: ${error.message}`;
  }
}
