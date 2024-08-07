const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const todos = [];

const addTodo = ()=> {
    console.log('button clicked sucessfully');

    const inputText = inputBox.value.trim();

    if (inputText <= 0){
        alert('you must write something');

        return false;
    }

    const listing = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'todo-checkbox';


    const paragraph = document.createElement('p');
    paragraph.innerHTML = inputText;

    listing.appendChild(checkbox);
    listing.appendChild(paragraph);

    todoList.appendChild(listing);
    inputBox.value = '';

}
addBtn.addEventListener('click', addTodo);