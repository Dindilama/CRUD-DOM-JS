//crear el boton eliminar tarea 
//
function botinEliminar(){
var items = document.querySelectorAll("#myUL > li");
//console.log(items);
for(let i=0; i < items.length; i++){
    let span = document.createElement("span");
    let txt = document.createTextNode("X");
    span.appendChild(txt);
    span.setAttribute("class","close");
    items[i].appendChild(span);
    }
}
//Agregar evento a las etiquetas span
//Para eliminar las tareas
let eliminar = document.querySelectorAll(".close");
for (let x=0; x < eliminar.length; x++) {
    eliminar[x].addEventListener("click", function(){
        //alert("di click");
        let li = eliminar[x].parentElement; ///this.parentElement;
        //console.log(li);
        //li.style.display = "none";
        li.remove();
    })
}
//Agregar una nueva tarea
function nuevaTarea() {
    let li = document.createElement("li");
    let textoTarea = document.querySelector("input").value;
    let texto = document.createTextNode(textoTarea);
    li.appendChild(texto);

    //Comprobaar que el campo no esté vacio
    if ( textoTarea == "")  {
        alert("Debes esscribir una tarea");
    }else{
        let listado = document.querySelector("#myUL");
        listado.appendChild(li);
        botinEliminar();
        textoTarea = "";
    }
    
}
let botonAgregar = document.querySelector(".addBtn");
botonAgregar.addEventListener("click", nuevaTarea);
