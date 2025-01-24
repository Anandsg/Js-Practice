const todoList = [];

// renderTodoList();

function renderTodoList() {
  let todoListHtml = ""; // accumulator variable
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}<p/>`;
    todoListHtml += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
  console.log(todoListHtml);
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  //   console.log(name);

  todoList.push(name);
  console.log(todoList);
  inputElement.value = ""; // reset input box to empty
  document.querySelector(".js-todo-name");
  renderTodoList();
}

// add todo when user hits enter
function handleTodoKeyDown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
