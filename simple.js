function adicionarTarefa() {
  // selecionar o input
  let input = document.getElementById("taskName");
  // ler o que está escrito
  let text = input.value;
  // limpa valor do input na tela
  input.value = "";

  // identificar onde vamos colocar o novo elemento
  let ul = document.getElementById("tasks");

  // criar um elemento
  let li = document.createElement("li");

  // colocar o text no elemento criado
  li.textContent = text;

  // criar uma nova div container para os icones
  let container = document.createElement("div");
  container.classList = "iconContainer";
  // criar uma div para o icone done
  let doneIcon = document.createElement("div");
  // atribuir as classes "icon doneIcon"
  doneIcon.classList = "icon doneIcon";
  doneIcon.addEventListener("click", marcarComoFeitoOuDesfazerTarefa);

  // criar uma div para o icone clear
  let clearIcon = document.createElement("div");
  // atribuir as classes "icon clearIcon"
  clearIcon.classList = "icon clearIcon";
  clearIcon.addEventListener("click", removerTarefa);

  // adicionar os icones dentro do container
  container.appendChild(doneIcon);
  container.appendChild(clearIcon);
  // adicionar o container dentro da li

  li.appendChild(container);

  // adicionar o elemento na ul
  ul.appendChild(li);
  // console.log(ul);
}

function marcarComoFeitoOuDesfazerTarefa(event) {
  let icon = event.target;
  let itemList = icon.parentElement.parentElement;
  if (icon.className === "icon doneIcon") {
    icon.classList = "icon redoIcon";
    itemList.classList = "done";
  } else {
    icon.classList = "icon doneIcon";
    itemList.classList = "";
  }
}

function removerTarefa(event) {
  // pegar o elemento ul pela id
  let ul = document.getElementById("tasks");
  // pegar li referente
  let li = event.target.parentElement.parentElement;
  // remover li de dentro da ul
  ul.removeChild(li);
}
