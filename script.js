const inputTexto= document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){

    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
}

function encriptar(stringEncriptar){
  
  let matrizCoodigo = [["e",  "enter"], ["i", "imes"], ["a" , "ai"], ["o", "ober"], ["u", "ufat"]];
  
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizCoodigo.length; i++){

      if(stringEncriptar.includes(matrizCoodigo[i][0])){

          stringEncriptar = stringEncriptar.replaceAll(matrizCoodigo[i][0], matrizCoodigo[i][1])
      }

    }  return stringEncriptar;

}

function btnDesencriptar(){

  const textoEncriptado = desencriptar(inputTexto.value)
  mensaje.value = textoEncriptado;
  mensaje.style.backgroundImage = "none"
  inputTexto.value = ""
}

function desencriptar(stringDesencriptar){
  
  let matrizCoodigo = [["e",  "enter"], ["i", "imes"], ["a" , "ai"], ["o", "ober"], ["u", "ufat"]];
  
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCoodigo.length; i++){

      if(stringDesencriptar.includes(matrizCoodigo[i][1])){

          stringDesencriptar = stringDesencriptar.replaceAll(matrizCoodigo[i][1], matrizCoodigo[i][0])
      }

    }  return stringDesencriptar;

}

function copiar(){
  mensaje.select ()
  navigator.clipboard.writeText(mensaje.value)
  mensaje.value=""
  alert("Texto copiado")

}
