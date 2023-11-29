//Gestor de tareas. Algo así como una agenda en la que puedas agregar, marcar como completadas y eliminar tareas de una lista.

let tareas = [];

function mostrarTareas(){
    alert("Bienvenido al gestor de tareas! Si desea agregar una tarea escriba: Agregar. \n Si desea eliminar una tarea escriba: Eliminar. \n Si desea marcar una tarea como completada escriba: Marcar. \n Si desea terminar escriba: Terminar")
    let elegir;

    do {
        let listaTareas = "";
        tareas.forEach((tarea)=>{
            listaTareas += `${tarea.numero} - ${tarea.nombre} - completada = ${tarea.completada} \n`
        });

        elegir = prompt(listaTareas).toLowerCase();

        if (elegir === "agregar"){
            let nuevaTarea = prompt("¿Qué nombre le quieres poner a la tarea?");
            agregarTarea(nuevaTarea);
        } else if (elegir === "eliminar") {
            let tareaEliminada = prompt("Ingrese el número de la tarea que desea eliminar: ");
            eliminarTarea(parseInt(tareaEliminada));
        } else if (elegir === "marcar") {
            let tareaCompletada = prompt("Ingrese el número de la tarea que desea marcar como completada: ");
            marcarCompletada(parseInt(tareaCompletada));
        } else if (elegir !== "terminar") {
            alert("Ingrese una opción válida");
        }
    } while(elegir !== "terminar");
}

function agregarTarea(tarea){
    let tareaNueva = {numero: tareas.length + 1, nombre: tarea, completada: false};
    tareas.push(tareaNueva);
    alert(`¡Tarea "${tarea}" agregada!`);
}

function eliminarTarea(numero){
    let tareaEncontrada = tareas.find(tarea => tarea.numero === numero);

    if (tareaEncontrada) {
        tareas = tareas.filter(tarea => tarea !== tareaEncontrada);
        alert(`¡Tarea "${tareaEncontrada.nombre}" eliminada!`);
    } else {
        alert("No se encontró la tarea en tu lista de tareas.");
    }
}

function marcarCompletada(numero){
    let tareaEncontrada = tareas.find(tarea => tarea.numero === numero);

    if (tareaEncontrada) {
        tareaEncontrada.completada = true;
        alert(`¡Tarea "${tareaEncontrada.nombre}" marcada como completada!`);
    } else {
        alert("No se encontró la tarea en tu lista de tareas.");
    }
}

mostrarTareas();

