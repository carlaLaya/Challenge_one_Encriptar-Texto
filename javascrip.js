function encriptar() {
    let texto = document.getElementById ("input-text").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let imagen= document.getElementById ("mensaje-correcto");

  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("input-text").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      imagen.src = "./img/mensaje-correcto.png";

    } else {
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    swal("¡ Atención !", "Debes ingresar un texto", "warning");

    }
  };
  
  function desencriptar() {
    let texto = document.getElementById("input-text").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");

    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("input-text").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
      } else {
        tituloMensaje.textContent = "¡ Atención ! Ningún mensaje fue encontrado";
    }
  };

function borrarTexto (){
 document.querySelector('#input-text').value = '';
};

