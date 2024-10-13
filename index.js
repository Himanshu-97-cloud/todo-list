// JavaScript for To-Do List

// Select elements
const taskInput = document.getElementById('input_text');
const taskDescription = document.getElementById('input_discription');
const taskPriority = document.getElementById('importance');
const taskDate = document.getElementById('date');
const addTaskButton = document.querySelector('form button[type="submit"]');
const taskList = document.querySelector('.list');
const filters = document.querySelectorAll('.filters button');

// // Array to store tasks
// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// // Function to render tasks
// function renderTasks(filteredTasks = tasks) {
//     taskList.innerHTML = ''; // Clear current list

//     filteredTasks.forEach((task, index) => {
//         const li = document.createElement('li');
//         li.classList.add('task');
        
//         // Apply priority class
//         if (task.priority === 'low') {
//             li.classList.add('priority-low');
//         } else if (task.priority === 'medium') {
//             li.classList.add('priority-medium');
//         } else if (task.priority === 'high') {
//             li.classList.add('priority-high');
//         }

//         // Check if overdue
//         const today = new Date().toISOString().split('T')[0];
//         if (task.date < today && !task.completed) {
//             li.classList.add('overdue');
//         }

//         // Task info
//         const taskInfoDiv = document.createElement('div');
//         taskInfoDiv.classList.add('task-info');
//         const taskText = document.createElement('span');
//         taskText.textContent = task.name;
//         if (task.completed) {
//             taskText.classList.add('completed');
//         }

//         // Mark as completed button
//         const completeButton = document.createElement('button');
//         completeButton.textContent = task.completed ? 'Undo' : 'Complete';
//         completeButton.addEventListener('click', () => toggleTaskCompletion(index));

//         // Task description
//         const taskDesc = document.createElement('p');
//         taskDesc.classList.add('task-desc');
//         taskDesc.textContent = `Description: ${task.description} | Due: ${task.date}`;

//         // Append everything
//         taskInfoDiv.append(taskText, completeButton);
//         li.append(taskInfoDiv, taskDesc);
//         taskList.appendChild(li);
//     });
// }

// // Function to add a task
// function addTask(event) {
//     event.preventDefault(); // Prevent form from submitting

//     const task = {
//         name: taskInput.value,
//         description: taskDescription.value,
//         priority: taskPriority.value,
//         date: taskDate.value,
//         completed: false
//     };

//     tasks.push(task); // Add task to the list
//     saveTasks();
//     renderTasks();

//     // Clear form inputs
//     taskInput.value = '';
//     taskDescription.value = '';
//     taskPriority.value = 'low';
//     taskDate.value = '';
// }

// // Function to toggle task completion
// function toggleTaskCompletion(index) {
//     tasks[index].completed = !tasks[index].completed;
//     saveTasks();
//     renderTasks();
// }

// // Function to filter tasks
// function filterTasks(event) {
//     const filter = event.target.textContent.toLowerCase();

//     let filteredTasks;
//     if (filter === 'active') {
//         filteredTasks = tasks.filter(task => !task.completed);
//     } else if (filter === 'completed') {
//         filteredTasks = tasks.filter(task => task.completed);
//     } else {
//         filteredTasks = tasks; // All tasks
//     }

//     renderTasks(filteredTasks);
// }

// // Function to save tasks to localStorage
// function saveTasks() {
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// // Event listeners
// addTaskButton.addEventListener('click', addTask);
// filters.forEach(button => button.addEventListener('click', filterTasks));

// // Initial render of tasks
// renderTasks();
