const form = document.getElementById("form");
var nomb = document.getElementById("nomb");
var numChip = document.getElementById("chip");
var mensajeMostar = document.getElementById("mensaje");

form.addEventListener("submit", e =>{
    e.preventDefault();
    let mensajeMostar;
    let entrar = false;

    if(numChip.value.length <8 || numChip.value.length >13)
    mensajeMostar += "Ingrese Entre 8 y 13 numeros"
    entrar = true;
    
})
