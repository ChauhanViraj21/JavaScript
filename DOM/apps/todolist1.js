document.addEventListener('DOMContentLoaded', function() {
    let taskFormEl = document.getElementById('task-form');
    let taskEl = document.getElementById('task');
    let submitbtn = document.getElementById('btnsub');
    let searchbtn = document.getElementById('btnsearch');
    let searchEl = document.getElementById('searchtask');

    submitbtn.addEventListener('click', function(e) {
        e.preventDefault();
        if(taskEl.value == "") {
            alert("Please Enter the Value.....");
        } else {
            let task = taskEl.value.trim();
            let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
            let lastId = localStorage.getItem('lastId') ? parseInt(localStorage.getItem('lastId')) : 0;

            let newId = lastId + 1;
            let taskObj = { id: newId, description: task };
            taskList.unshift(taskObj);

            localStorage.setItem('tasks', JSON.stringify(taskList));
            localStorage.setItem('lastId', newId);

            displayTasks();
            taskEl.value = "";
        }
    });

    function displayTasks(tasks = null) {
        let taskList = tasks || (localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []);
        if (taskList.length != 0) {
            let eachTask = '';
            for (let task of taskList) {
                eachTask += `<li class="list-group-item list-group-item-dark text-black mb-1">
                                <span>${task.description}</span>
                                <button class="float-end ms-2" onclick="deleteTask(${task.id})">
                                    <i class="fa fa-times-circle" id="btn-delete"></i>
                                </button>
                                <button class="float-end" onclick="editTask(${task.id})">
                                    <i class="fa fa-pen-to-square" id="btn-edit"></i>
                                </button>
                            </li>`;
            }
            document.querySelector('#display').innerHTML = eachTask;
        } else {
            document.querySelector('#display').innerHTML = '<p>No tasks available.</p>';
        }
    }

    function deleteTask(id) {
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList = taskList.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(taskList));
        displayTasks();
    }

    function editTask(id) {
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        taskList.forEach(task => {
            if (task.id === id) {
                if (taskEl.value.trim() === '') {
                    alert('Please enter a task then after edit');
                    return;
                }
                task.description = taskEl.value.trim();
                localStorage.setItem('tasks', JSON.stringify(taskList));
                displayTasks();
                taskEl.value = "";
            }
        });
    }

    // Search Tasks
    searchbtn.addEventListener('click', function(e) {
        e.preventDefault();
        let searchTerm = searchEl.value.trim().toLowerCase();
        if (searchTerm === "") {
            alert("Please enter a task to search.");
        } else {
            let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
            let filteredTasks = taskList.filter(task => task.description.toLowerCase().includes(searchTerm));
            displayTasks(filteredTasks);
        }
    });

    // Call displayTasks on page load to display stored tasks
    displayTasks();
}); 