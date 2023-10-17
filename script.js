const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let itemCount = 0;
let uncheckedCount = 0;

function updateItemCount() {
  itemCountSpan.textContent = itemCount;
  uncheckedCountSpan.textContent = uncheckedCount;
}

function newTodo() {
  const todoText = prompt('Enter a new TODO:');
  if (todoText) {
    // Create a new TODO item
    const todoItem = document.createElement('li');
    todoItem.className = classNames.TODO_ITEM;

    const todoCheckbox = document.createElement('input');
    todoCheckbox.type = 'checkbox';
    todoCheckbox.className = classNames.TODO_CHECKBOX;
    todoCheckbox.addEventListener('change', function () {
      if (todoCheckbox.checked) {
        uncheckedCount--;
      } else {
        uncheckedCount++;
      }
      updateItemCount();
    });

    const todoTextElement = document.createElement('span');
    todoTextElement.className = classNames.TODO_TEXT;
    todoTextElement.textContent = todoText;

    const todoDelete = document.createElement('button');
    todoDelete.className = classNames.TODO_DELETE;
    todoDelete.textContent = 'Delete';
    todoDelete.addEventListener('click', function () {
      list.removeChild(todoItem);
      itemCount--;
      if (!todoCheckbox.checked) {
        uncheckedCount--;
      }
      updateItemCount();
    });

    todoItem.appendChild(todoCheckbox);
    todoItem.appendChild(todoTextElement);
    todoItem.appendChild(todoDelete);
    list.appendChild(todoItem);

    itemCount++;
    uncheckedCount++;
    updateItemCount();
  }
}

updateItemCount();
