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
    imagenURL = "https://www.klipartz.com/es/sticker-png-ghdjk";
  } else if (total >= 20 && total <= 30) {
    mensaje = "Eres un tamal rojo";
    imagenURL = "https://quehagodecomerhoy.com/wp-content/uploads/2018/04/Tamales-Rojos-825x510.jpg";
  } else if (total >= 30 && total <= 40) {
    mensaje = "Eres un tamal de elote";
    imagenURL = "https://cdn7.kiwilimon.com/recetaimagen/14561/640x640/6941.jpg.webp";
  } else if (total >= 40 && total <= 50) {
    mensaje = "Eres un tamal oxaqueño";
    imagenURL = "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/68D64DAE-9605-42AC-BDCF-328A509EC776/Derivates/7AC0E9FD-F0DA-410B-9D78-19D3C3BEA1F3.jpg";
  } else if (total >= 50 && total <= 60) {
    mensaje = "Eres un tamal de camarón";
    imagenURL = "https://www.radioformula.com.mx/u/fotografias/m/2022/7/30/f768x1-595273_595400_9.jpg";
  } else if (total >= 60 && total <= 70) {
    mensaje = "Eres un tamal dulce";
    imagenURL = "https://cocinamia.com.mx/wp-content/uploads/2019/06/Sin-t%C3%ADtulo-2-14-1100x500.png";
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
