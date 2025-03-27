const button = document.querySelector(".task-submit");
const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".task-list");

button.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    //Si no hay texto en el input, no se crea la tarea
    // Crear una nueva tarea en la lista, cuando el usuario haga clic en el botón
    const newTask = document.createElement("li"); // Crea un LI nuevo
    newTask.textContent = taskText; // Agregar el texto del input al LI

    // Crear un botón para eliminar la tarea
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete-button";

    deleteButton.addEventListener("click", function () {
      taskList.removeChild(newTask);
    });

    // Agregar el boton a la tarea nueva
    newTask.appendChild(deleteButton);

    //Agregar la tarea a la lista
    taskList.appendChild(newTask);

    //Limpiar el input
    taskInput.value = "";
  }
});
