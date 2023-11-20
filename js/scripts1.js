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
  var consulta = document.getElementById("busquedaInput").value.toLowerCase();
  var elementos = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
  var contenedorResultados = document.getElementById("resultados");
  contenedorResultados.innerHTML = "";

  elementos.forEach(function (elemento) {
    var contenido = elemento.innerText.toLowerCase();

    if (contenido.includes(consulta)) {
      var resultadoElemento = document.createElement("div");
      resultadoElemento.textContent = contenido;
      resultadoElemento.classList.add("resultado-blanco"); // Agrega la clase para el color blanco
      contenedorResultados.appendChild(resultadoElemento);
    }
  });
}


function checkAnswers() {
  // Obtener respuestas
  var answer1 = document.getElementById("answer1").innerText.trim();
  var answer2 = document.getElementById("answer2").innerText.trim();
  var answer3 = document.getElementById("answer3").innerText.trim();
  var answer4 = document.getElementById("answer4").innerText.trim();

  // Verificar respuestas y mostrar resultado
  if (
    answer1.toLowerCase() === "red" &&
    answer2.toLowerCase() === "chocolates" &&
    answer3.toLowerCase() === "one" &&
    answer4.toLowerCase() === "your own words"
  ) {
    alert("¡Todas las respuestas son correctas!");
  } else {
    alert("Al menos una respuesta es incorrecta. ¡Inténtalo de nuevo!");
  }
}

function analizarRespuestas() {
  
  const respuestasCorrectas = {
    pregunta1: "Segundos ",
    pregunta2: "falso",
    pregunta3: "Falso",
    pregunta4: "Mol (mol)",
    pregunta5: "julios/joule",
    pregunta6: "Masa",
    pregunta7: "Metro cubico",
    pregunta8: "Candela",
    pregunta9: "°F = (°C × 1,8) + 32.",
    pregunta10: "capacidad"
  };

  
  const respuesta1 = document.getElementById("respuesta1").value.trim().toLowerCase();
      const respuesta2 = document.getElementById("respuesta2").value.trim().toLowerCase();
      const respuesta3 = document.getElementById("respuesta3").value.trim().toLowerCase();
      const respuesta4 = document.getElementById("respuesta4").value.trim().toLowerCase();
      const respuesta5 = document.getElementById("respuesta5").value.trim().toLowerCase();
      const respuesta6 = document.getElementById("respuesta6").value.trim().toLowerCase();
      const respuesta7 = document.getElementById("respuesta7").value.trim().toLowerCase();
      const respuesta8 = document.getElementById("respuesta8").value.trim().toLowerCase();
      const respuesta9 = document.getElementById("respuesta9").value.trim().toLowerCase();
      const respuesta10 = document.getElementById("respuesta10").value.trim().toLowerCase();

  
      if (
        respuesta1 === respuestasCorrectas.pregunta1 &&
        respuesta2 === respuestasCorrectas.pregunta2 &&
        respuesta3 === respuestasCorrectas.pregunta3 &&
        respuesta4 === respuestasCorrectas.pregunta4 &&
        respuesta5 === respuestasCorrectas.pregunta5 &&
        respuesta6 === respuestasCorrectas.pregunta6 &&
        respuesta7 === respuestasCorrectas.pregunta7 &&
        respuesta8 === respuestasCorrectas.pregunta8 &&
        respuesta9 === respuestasCorrectas.pregunta9 &&
        respuesta10 === respuestasCorrectas.pregunta10
      ) {

    alert("¡Todas las respuestas son correctas!");
      } else {
        let mensaje = "Al menos una respuesta es incorrecta. Respuestas correctas:\n";
        mensaje += `Pregunta 1: ${respuestasCorrectas.pregunta1}\n`;
        mensaje += `Pregunta 2: ${respuestasCorrectas.pregunta2}\n`;
        mensaje += `Pregunta 3: ${respuestasCorrectas.pregunta3}\n`;
        mensaje += `Pregunta 4: ${respuestasCorrectas.pregunta4}\n`;
        mensaje += `Pregunta 5: ${respuestasCorrectas.pregunta5}\n`;
        mensaje += `Pregunta 6: ${respuestasCorrectas.pregunta6}\n`;
        mensaje += `Pregunta 7: ${respuestasCorrectas.pregunta7}\n`;
        mensaje += `Pregunta 8: ${respuestasCorrectas.pregunta8}\n`;
        mensaje += `Pregunta 9: ${respuestasCorrectas.pregunta9}\n`;
        mensaje += `Pregunta 10: ${respuestasCorrectas.pregunta10}\n`;

        alert(mensaje);
      }
    }

    