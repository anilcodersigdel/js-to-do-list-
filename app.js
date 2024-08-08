const inputBox = document.getElementById("inputBox");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

const todos = [];

const addTodo = () => {
  console.log("button clicked sucessfully");
  const inputText = inputBox.value.trim();

  if (inputText <= 0) {
    alert("you must write something");
    return false;
  }
  const uuid = self.crypto.randomUUID();
  console.log(uuid);

  const obj = {
    label: inputText,
    checked: false,
    key: uuid,
  };

  todos.push(obj);
  console.log(todos);

  todoList.innerHTML = "";

  display();
};

const display = () => {
  todos.forEach((val) => {
    const listing = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";

    const paragraph = document.createElement("p");
    paragraph.innerHTML = val.label;

    const editBtn = document.createElement("button");
    editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
    editBtn.classList.add("btn", "editBtn");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.id = "deleteBtn";
    deleteBtn.classList.add("btn", "deleteBtn");

    listing.appendChild(checkbox);
    listing.appendChild(paragraph);
    listing.appendChild(editBtn);
    listing.appendChild(deleteBtn);

    todoList.appendChild(listing);
    inputBox.value = "";
  });
};

addBtn.addEventListener("click", addTodo);
console.log(todos);

// deleteBtn.addEventListener("click", function(event) {
//   console.log("delete button clicked sucessfully");
//   if (event.target.id === "deleteBtn") {
//     todoList.removeChild(event.target.parentElement);
//   }
// });

// localStorage.setItem;
