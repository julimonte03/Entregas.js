const botonAgregar = document.getElementById("agregar");
const botonSacar = document.getElementById("sacar");
const input = document.getElementById("input");
const listaTareas = document.getElementById("tareas");
let tareas = [];

botonAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    agregarTarea();
});

botonSacar.addEventListener("click", (e) => {
    e.preventDefault();
    sacarTarea();
});

document.addEventListener("DOMContentLoaded", () => {
    traerTareaStorage(); 
});

function agregarTarea() {
    const nuevaTarea = input.value.trim();
    if (nuevaTarea !== "") {
        tareas.push(nuevaTarea);
        input.value = "";
        console.log(tareas); 
        actualizarListaTareas();
        guardarTareaStorage();
    }
}

function sacarTarea() {
    const tareaQuitada = input.value.trim();
    if (tareaQuitada !== "") {
        const index = tareas.indexOf(tareaQuitada);
        if (index !== -1) {
            tareas.splice(index, 1); 
        }
        console.log(tareas);
        actualizarListaTareas();
        guardarTareaStorage();
    }
}

function actualizarListaTareas(){
    listaTareas.innerHTML = ""
    tareas.forEach(tarea =>{
        const nuevoItem = document.createElement("li");
        nuevoItem.textContent = tarea;
        listaTareas.appendChild(nuevoItem);
    })
}

function guardarTareaStorage(){
    localStorage.setItem("tareas",JSON.stringify(tareas))
}

function traerTareaStorage() {
    const tareasStorage = JSON.parse(localStorage.getItem("tareas"));
    if (tareasStorage) {
        tareas = tareasStorage;
        actualizarListaTareas(); 
    }
}

