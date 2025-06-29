const mostrarError =(input,mensaje)=>{
 const divPadre= input.parentNode;
const errorText = divPadre.querySelector(".error-text");
 divPadre.classlist.add("error");
 errorText.innerText=mensaje; 
   
}

const input =document.querySelector("#contraseña");
const mensaje = "campo obligatorio"