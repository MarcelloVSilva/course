let counter = 1;

function addTask() {
  const target = document.getElementById("tasks");
  const taskName = document.getElementById("taskName");
  const newElement = document.createElement("li");

  newElement.textContent = taskName.value;
  newElement.addEventListener("dblclick", handleResolvedTask);

  target.appendChild(newElement);

  taskName.value = "";
  counter++;
}

function removeTask(e) {
  const tasks = document.getElementById("tasks");
  tasks.removeChild(e.target);
}

function handleResolvedTask(e) {
  let currentDecoration = e.target.style.textDecoration;
  if (currentDecoration === "line-through") {
    e.target.style.textDecoration = "unset";
  } else e.target.style.textDecoration = "line-through";
}
