
let linterna=document.getElementById("luz")
let menu=document.getElementById("menu")
let footer=document.getElementById("footer")
let bg=document.getElementById("bg")
let hs=document.getElementById("hs")
let image=document.getElementById("foco")
let bandera=false
/*linterna.addEventListener("click",function() //si la condicion es false se prende el color si es true se apaga por eso la bandera
{ 
if(bandera==false)
{

back.style.background="black"
bandera=true; //primer click cambia a true asi la condicion pasa de vuelta sabe que el boton esta activado
}
else{
back.style.background.remove("black")
bandera=false//se desactiva el color pero cuando se aprete de vuelta el boton el color se va activar al cumplir la condicion de la bandera
} 
}



)
*/

linterna.addEventListener("click",function changeColor() //si la condicion es false se prende el color si es true se apaga por eso la bandera
{
if(bandera)
{
footer.style.color="black"
menu.style.backgroundColor="orangered"
hs.style.backgroundColor = "white"
bg.style.backgroundColor = "white"
image.src="prendido.png" //cambia imagen de etiqueta imagen
bandera=false; //primer click cambia a true asi la condicion pasa de vuelta sabe que el boton esta activado
}
else{
footer.style.color="white"
menu.style.backgroundColor="#4F5460 "
hs.style.backgroundColor = "#090D22 "
bg.style.backgroundColor = "#090D22 " //cambia el fondo
bg.style.transition="background-color 1s"//transicion
hs.style.transition="background-color 1s"
menu.style.transition="background-color .2s"
image.src="apagado.png"
bandera=true//se desactiva el color pero cuando se aprete de vuelta el boton el color se va activar al cumplir la condicion de la bandera
} 
}



)