// Lista de objetos onde cada objeto simboliza uma tarefa.
// Simples simulação de um banco de dados.
let items = [];

function readArrayAndInsertNewItem() {
  // descobrindo onde colocar os itens na tela
  const target = document.getElementById("tasks");
  resetList();

  // varrendo o array
  items.forEach((item, idx) => {
    // criando cada item
    const newElement = document.createElement("li");

    // atribuindo o texto
    newElement.textContent = item.title;
    // atribuindo classe para diferenciar tarefas feitas das não feitas
    newElement.classList = item.done ? "done" : "todo";
    //atribuindo id ao elemento
    newElement.id = idx;

    // criando container para colocar os icones
    const iconContainer = document.createElement("div");
    // atribuindo class ao iconContainer
    iconContainer.classList = "iconContainer";

    // criando icone handleStatusIcon
    const handleStatusIcon = document.createElement("img");
    // atribuindo classe à tag img
    if (item.done) {
      handleStatusIcon.classList = "icon redoIcon";
    } else handleStatusIcon.classList = "icon doneIcon";

    // adicionando evento de click para resolver tarefa
    handleStatusIcon.addEventListener("click", handleResolvedTask);
    // criando icone clear
    const clearIcon = document.createElement("img");
    // atribuindo classe à tag img
    clearIcon.classList = "icon clearIcon";
    // adicionando evento de click para resolver tarefa
    clearIcon.addEventListener("click", removeTask);

    // adicionando os icones ao iconContainer
    iconContainer.appendChild(handleStatusIcon);
    iconContainer.appendChild(clearIcon);

    // adicionando iconContainer ao novo newElement
    newElement.appendChild(iconContainer);

    // inserindo cada item criado dentro do elemento html
    target.appendChild(newElement);
  });
}

function addTaskIntoArray() {
  // pegando/selecionando o texto digitado
  const taskName = document.getElementById("taskName");
  // se não tiver nenhum valor no campo, a função chama o return e não faz nada
  if (taskName.value === "") return;
  // inserindo no array um novo objeto
  items.push({
    title: taskName.value,
    done: false
  });
  // limpando campo de texto
  taskName.value = "";
  // chamando função para ler o array e montar a lista na tela
  readArrayAndInsertNewItem();
}

function handleResolvedTask(event) {
  // pegando/selecionando item clicado a partir do ícone
  //        / ícone clicado / elemento pai/elemento pai / id do elemento pai
  const {id} = event.currentTarget.parentElement.parentElement;

  // identificando o elemento no array
  const currentItem = items[id];
  // alterando o done para o oposto do atual
  currentItem.done = !currentItem.done;
  // atribuindo a mesma posição do array o item atual com a modificação
  items[id] = currentItem;

  // chamando função para ler o array e montar a lista na tela
  readArrayAndInsertNewItem();
}

function removeTask(event) {
  // pegando/selecionando item clicado a partir do ícone
  //        / ícone clicado / elemento pai/elemento pai / id do elemento pai
  const {id} = event.currentTarget.parentElement.parentElement;

  // removendo do array um item específico
  items.splice(id, 1);

  // chamando função para ler o array e montar a lista na tela
  readArrayAndInsertNewItem();
}

function resetList() {
  // identificando elemento no html cujo o id é "tasks"
  const target = document.getElementById("tasks");
  // atribuindo ao elemento identificado um conteúdo em html igual à "" (nada/vazio)
  target.innerHTML = "";
}
