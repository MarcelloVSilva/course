let counter = 1;

function addTask() {
  const target = document.getElementById("tasks");
  const newElemenet = document.createElement("li");
  newElemenet.textContent = "task " + counter;
  newElemenet.addEventListener("click", removeTask);
  target.appendChild(newElemenet);
  counter++;
}

function removeTask(e) {
  const tasks = document.getElementById("tasks");
  tasks.removeChild(e.target);
}
