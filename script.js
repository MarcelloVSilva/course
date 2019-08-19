// Lista de objetos onde cada objeto simboliza uma tarefa.
// Simples simulação de um banco de dados.
let items = [];

function readArrayAndInsertNewItem() {
  // saber onde colocar os itens na tela
  const target = document.getElementById("tasks");
  resetList();

  // varrer o array
  items.forEach((item, idx) => {
    // criar cada item
    const newElement = document.createElement("li");

    // atribuir o texto
    newElement.textContent = item.title;
    // atribuir classe para diferenciar tarefas feitas das não feitas
    newElement.classList = item.done ? "done" : "todo";
    //atribuir id ao elemento
    newElement.id = idx;

    // criar container para colocar os icones
    const iconContainer = document.createElement("div");

    // criar icone done
    const doneIcon = document.createElement("img");
    // atribuindo classe à tag img
    doneIcon.classList = "icon doneIcon";
    // adicionar evento de click para resolver tarefa
    doneIcon.addEventListener("click", handleResolvedTask);
    // criar icone clear
    const clearIcon = document.createElement("img");
    // atribuindo classe à tag img
    clearIcon.classList = "icon clearIcon";

    // adicionar os icones ao iconContainer
    iconContainer.appendChild(doneIcon);
    iconContainer.appendChild(clearIcon);

    // adicionar iconContainer ao novo newElement
    newElement.appendChild(iconContainer);

    // inserir cada item criado dentro do elemento html
    target.appendChild(newElement);
  });
}

function addTaskIntoArray() {
  // pegar o texto digitado
  const taskName = document.getElementById("taskName");
  // se não tiver nenhum valor no campo, a função chama o return e não faz nada
  if (taskName.value === "") return;
  // inserindo no array um novo objeto
  items.push({
    title: taskName.value,
    done: false
  });
  // limpar campo de texto
  taskName.value = "";
  // chamando função para ler o array e montar a lista na tela
  readArrayAndInsertNewItem();
}

function handleResolvedTask(e) {
  // debugger;
  const id = e.currentTarget.parentElement.parentElement.id;
  // identificar o elemento no array
  const currentItem = items[id];
  // alterar o done para o oposto do atual
  currentItem.done = !currentItem.done;
  // atribuir a mesma posição do array o item atual com a modificação
  items[id] = currentItem;
  // chamando função para ler o array e montar a lista na tela
  readArrayAndInsertNewItem();
}

function removeTask(e) {
  const tasks = document.getElementById("tasks");
  tasks.removeChild(e.target);
}

function resetList() {
  const target = document.getElementById("tasks");
  target.innerHTML = "";
}
