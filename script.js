document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskContent = taskInput.value.trim();
        if (taskContent === '') return;

        const li = document.createElement('li');
        li.textContent = taskContent;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        li.appendChild(deleteButton);
        li.addEventListener('click', function () {
            li.classList.toggle('completed');
        });

        taskList.appendChild(li);
        taskInput.value = '';
    }

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
