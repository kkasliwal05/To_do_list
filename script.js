document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const task = todoInput.value.trim();
        if (task !== '') {
            addTodo(task);
            todoInput.value = '';
        }
    });

    function addTodo(task) {
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');
        todoItem.textContent = task;

        // Create Done Button
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Mark as Done';
        doneButton.addEventListener('click', function () {
            todoItem.classList.toggle('completed');
            doneButton.textContent = todoItem.classList.contains('completed') ? 'Undo' : 'Mark as Done';
        });

        // Create Delete Button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function () {
            todoItem.remove();
        });

        todoItem.appendChild(doneButton);
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
    }
});
