function encriptar(){
    var mensajeEntrada = document.querySelector("#input-texto").value;
    var mensaje = mensajeEntrada
    .replace("e","enter") 
    .replace("i","imes") 
    .replace("a","ai") 
    .replace("o","ober") 
    .replace("u","ufat") ;
    document.getElementById("muneco").innerHTML = mensaje;
    console.log("mensaje")
}
var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick=encriptar;


function desencriptar(){
    var mensajeEntrada = document.getElementById("muneco").innerHTML;
    var mensaje = mensajeEntrada
    .replace(/enter/gi,"e") 
    .replace(/imes/gi,"i") 
    .replace(/ai/gi,"a") 
    .replace(/ober/gi,"o") 
    .replace(/ufat/gi,"u");
    document.getElementById("muneco").innerHTML = mensaje;
    console.log("mensaje")
}
var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick=desencriptar;

var boton = document.getElementById("btn-copiar");
boton.addEventListener("click", copiarAlPortapapeles, false);
function copiarAlPortapapeles() {
  var enlace = document.getElementById("muneco");
  var inputFalso = document.createElement("input");
  inputFalso.setAttribute("value", enlace.innerHTML);
  document.body.appendChild(inputFalso);
  inputFalso.select();
  document.execCommand("copy");
  document.body.removeChild(inputFalso);
  alert("Copiado al portapapeles!");
}