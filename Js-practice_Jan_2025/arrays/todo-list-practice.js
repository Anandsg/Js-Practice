const todoList = [];

// renderTodoList();

function renderTodoList() {
  let todoListHtml = ""; // accumulator variable
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
          <div>${name}</div>  
          <div>${dueDate}</div>
          <button onclick="
          todoList.splice(${index}, 1)
          renderTodoList();"
          class="delete-btn">Delete</button>
      `;
    todoListHtml += html;
  });
  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
  //   console.log(todoListHtml);
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;
  //   console.log(name);

  const dueDateElement = document.querySelector(".js-due-date-input");
  const dueDate = dueDateElement.value;

  //   console.log(dueDate);

  if (name.trim() === "") {
    document.querySelector(
      ".js-name-message"
    ).innerHTML = `Please add todo name!`;
  } else if (dueDate.trim() === "") {
    document.querySelector(
      ".js-due-date-message"
    ).innerHTML = `Please select date!`;
  } else {
    document.querySelector(".js-name-message").innerHTML = "";
    document.querySelector(".js-due-date-message").innerHTML = "";
    todoList.push({
      name: name,
      dueDate: dueDate,
    });
  }
  console.log(todoList);
  inputElement.value = ""; // reset input box to empty
  dueDateElement.value = "";
  document.querySelector(".js-todo-name");
  renderTodoList();
}

// add todo when user hits enter
function handleTodoKeyDown(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}
