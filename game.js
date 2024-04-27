function mostrarAlerta(mensaje, imagenURL) {
  const alerta = document.createElement('div');
  alerta.style.backgroundColor = 'rgba(255, 99, 71, 0.9)';
  alerta.style.color = 'black'; 
  alerta.style.padding = '20px';
  alerta.style.borderRadius = '10px';
  alerta.style.border = '2px solid rgba(255, 99, 71, 1)';
  alerta.style.position = 'fixed';
  alerta.style.top = '50%';
  alerta.style.left = '50%';
  alerta.style.transform = 'translate(-50%, -50%)';
  alerta.style.zIndex = '9999';
  alerta.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.7)';
  alerta.style.fontFamily = 'Arial, sans-serif';
  alerta.style.fontSize = '24px';
  alerta.style.fontWeight = 'bold';
  if (imagenURL) {
    const imagen = document.createElement('img');
    imagen.src = imagenURL;
    imagen.style.maxWidth = '200px';
    imagen.style.display = 'block';
    imagen.style.margin = '0 auto';
    alerta.appendChild(imagen);
  }
  const mensajeDiv = document.createElement('div');
  mensajeDiv.textContent = mensaje;
  alerta.appendChild(mensajeDiv);
  document.body.appendChild(alerta);
  setTimeout(() => {
    alerta.remove();
  }, 6000);
}
function reiniciarTest() {
  const respuestas = document.querySelectorAll('input[type="radio"]:checked');
  respuestas.forEach(respuesta => {
    respuesta.checked = false;
  });
}
function calcularResultado() {
  const preguntas = document.querySelectorAll('section');
  let todasRespondidas = true;
  preguntas.forEach(pregunta => {
    const respuestasSeleccionadas = pregunta.querySelectorAll('input[type="radio"]:checked');
    if (respuestasSeleccionadas.length === 0) {
      todasRespondidas = false;
    }
  });
  if (todasRespondidas) {
  const respuestas = document.querySelectorAll('input[type="radio"]:checked');
  let total = 0;
  respuestas.forEach(respuesta => {
    total += parseInt(respuesta.value);
  });
  let mensaje = '';
  let imagenURL = '';
  if (total >= 10 && total <= 20) {
    mensaje = "Eres un tamal de Pollo";
    imagenURL = "imagen1.jpg";
  } else if (total >= 20 && total <= 30) {
    mensaje = "Eres un tamal de mole";
    imagenURL = "imagen2.jpg";
  } else if (total >= 30 && total <= 40) {
    mensaje = "Eres un tamal de elote";
    imagenURL = "imagen3.jpg";
  } else if (total >= 40 && total <= 50) {
    mensaje = "Eres un tamal oxaqueño";
    imagenURL = "imagen4.jpg";
  } else if (total >= 50 && total <= 60) {
    mensaje = "Eres un tamal de camarón";
    imagenURL = "imagen5.jpg";
  } else if (total >= 60 && total <= 70) {
    mensaje = "Eres un tamal dulce";
    imagenURL = "imagen6.jpg";
  } else if (total >= 70 && total <= 80) {
    mensaje = "Eres un tamal de rajas con queso";
    imagenURL = "imagen7.jpg";
  } else if (total >= 80 && total <= 90) {
    mensaje = "Eres un tamal de puerco";
    imagenURL = "imagen8.jpg";
  } else if (total > 90 && total <= 100) {
    mensaje = "Eres un tamal de queso con jalapeño";
    imagenURL = "imagen9.jpg";
  } else if (total > 100 && total <= 110) {
    mensaje = "Eres un tamal de frijole";
    imagenURL = "imagen10.jpg";
  } else if (total > 110 && total <= 120) {
    mensaje = "Eres un tamal verde";
    imagenURL = "image11.jpg";
  } else if (total > 120 && total <= 130) {
    mensaje = "Eres un tamal ranchero";
    imagenURL = "imagen12.jpg";
  } else if (total > 130 && total <= 140) {
    mensaje = "Eres un tamal de piedra";
    imagenURL = "imagen13.jpg";
  } else {
    mensaje = "Eres un tamal de chipilin";
    imagenURL = "imagen13.jpg";
  }
  mostrarAlerta(mensaje, imagenURL);
  reiniciarTest();
} else {
  mostrarAlerta("Por favor, contesta todas las preguntas","");
}

} 