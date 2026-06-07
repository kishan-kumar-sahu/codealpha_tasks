


// Load todos from localStorage
const todoList = JSON.parse(localStorage.getItem("todos")) || [];

displayItem();

// Add Todo
function addTodo() {
  const inputbox = document.querySelector(".inputbox");
  const inputdate = document.querySelector("#inputdate");

  let todoitem = inputbox.value.trim();
  let tododate = inputdate.value;

  // Validation
  if (!todoitem || !tododate) {
    alert("Please fill all fields!");
    return;
  }

  // Add todo
  todoList.push({
    item: todoitem,
    duedate: tododate,
  });

  // Save to localStorage
  localStorage.setItem("todos", JSON.stringify(todoList));

  // Clear inputs
  inputbox.value = "";
  inputdate.value = "";

  displayItem();
}

// Delete Todo
function deleteTodo(index) {
  todoList.splice(index, 1);

  // Update localStorage
  localStorage.setItem("todos", JSON.stringify(todoList));

  displayItem();
}

// Display Todos
function displayItem() {
  const allListContainer = document.querySelector(".todoContainer");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    let { item, duedate } = todoList[i];

    newHtml += `
      <span id="createitem">${item}</span>
      <span id="createdate">${duedate}</span>
      <button class="createbtn" onclick="deleteTodo(${i})">
        Delete
      </button>
    `;
  }

  allListContainer.innerHTML = newHtml;
}