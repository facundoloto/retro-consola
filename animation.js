let texto=document.getElementById("texto")
let linterna=document.getElementById("luz")
let bandera=false
linterna.addEventListener("click",function changeColor() //si la condicion es false se prende el color si es true se apaga por eso la bandera
{ 
if(bandera==false)
{
texto.classList.add("color")
bandera=true; //primer click cambia a true asi la condicion pasa de vuelta sabe que el boton esta activado
}
else{
texto.classList.remove("color")
bandera=false//se desactiva el color pero cuando se aprete de vuelta el boton el color se va activar al cumplir la condicion de la bandera
} 
}



)

