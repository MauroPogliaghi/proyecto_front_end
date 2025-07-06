document.addEventListener("DOMContentLoaded",()=>{
const formulario = document.querySelector("form");

const mostrarError = (input, mensaje) => {
  const divPadre = input.parentNode;
  const errorText = divPadre.querySelector(".error-text");
  input.classList.add("error");
  errorText.innerText = mensaje;
};

const input = document.querySelector("#email");
const mensaje = "campo obligatorio";


const eliminarError = (input) =>{
  const divPadre = input.parentNode;
  divPadre.classList.remove("error");
  const errorText = divPadre.querySelector(".error-text");
  errorText.innerText = "";
}

formulario.querySelectorAll("input").forEach(input =>{
  input.addEventListener("change",()=>{
    const valor = input.value.trim();
    if (valor !==""){
      eliminarError(input);
    }
  })
})
function validarCampo(campoId,mensaje){
  const campo = document.getElementById(campoId);
  const value = campo.value.trim();
  
  if (value == ""){
    mostrarError(campo,mensaje);
    return false;
  } else {
    eliminarError(campo)
    return true;
  }  
}

function isEmail (email){
  const expresionRegular =  /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  return expresionRegular.test(email);
}

function validarEmail(campoId,mensaje){
   const campo = document.getElementById(campoId);
  const value = campo.value.trim();

  if (value ===""){
    mostrarError(campo, "el correo electronico es obligatorio");
    return false
  }else if (!isEmail(value)){
    mostrarError(campo,mensaje);
    return false
  }else{
    eliminarError(campo);
    return true
  }
}
const validarFormulario = () => {
  let validar = true;
  validar = validarEmail("email", "el correo electronico no es valido") && validar;
  validar = validarCampo("password", "la contraseña es obligatoria") && validar;
  return validar;
}
formulario.addEventListener("submit",event =>{
  event.preventDefault();
  if (validarFormulario()){
    event.preventDefault();
    console.log("el formulario es valido");
  }else{
    event.preventDefault();
    console.log("el formulario no es valido...");
  }
})
})

