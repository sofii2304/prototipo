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

  elementos.forEach(function(elemento) {
      var contenido = elemento.innerText.toLowerCase();

      if (contenido.includes(consulta)) {
          
          var resultadoElemento = document.createElement("div");
          resultadoElemento.textContent = contenido;
          contenedorResultados.appendChild(resultadoElemento);
      }
  });
}
