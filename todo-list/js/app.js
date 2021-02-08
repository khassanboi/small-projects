//SELECTORS
const title = document.querySelector(".page-title");
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const clearBtn = document.querySelector(".delete");

//EVENT LISTENERS
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);
clearBtn.addEventListener('click', function () {
	localStorage.clear();
	location.reload();
})

//FUNCTIONS

function getNameOfVisitor() {
	//Checking whether the name exists on sessionStorage
	if (localStorage.getItem('name') === null) {
		let name = prompt("Hello! What a gorgeous name can I use to call you?");
		localStorage.setItem('name', name);
		title.innerText = name + "'s Todo List";
	} else {
		title.innerText = localStorage.getItem('name') + "'s Todo List";
	}

}

function addTodo(event) {
	event.preventDefault();

	if (document.querySelector(".todo-input").value != "") {
		//Todo div
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("todo");

		//New li
		const newTodo = document.createElement("li");
		newTodo.innerText = todoInput.value;
		newTodo.classList.add("todo-item");
		todoDiv.appendChild(newTodo);

		//Adding todo to LocalStorage
		saveLocalTodos(todoInput.value);

		//Check mark button
		const completedButton = document.createElement("button");
		completedButton.innerHTML = '<i class="fas fa-check"></li>';
		completedButton.classList.add("complete-btn");
		todoDiv.appendChild(completedButton);

		//Check trash button
		const trashButton = document.createElement("button");
		trashButton.innerHTML = '<i class="fas fa-trash"></li>';
		trashButton.classList.add("trash-btn");
		todoDiv.appendChild(trashButton);

		//Appending to list
		todoList.appendChild(todoDiv);

		//Clearing input
		todoInput.value = "";
	}
}

function deleteCheck(e) {
	const item = e.target;

	//Deleting todo
	if (item.classList[0] === "trash-btn") {
		const todo = item.parentElement;
		//Animation
		todo.classList.add("run");
		//Functionality
		removeLocalTodos(todo);
		todo.addEventListener("transitionend", function () {
			todo.remove();
		});
	}

	//Checking todo
	if (item.classList[0] === "complete-btn") {
		const todo = item.parentElement;
		todo.classList.toggle("completed");
	}
}

function filterTodo(e) {
	const todos = todoList.childNodes;
	console.log(e.target.value);
	todos.forEach(function (todo) {
		switch (e.target.value) {
			case "all":
				todo.style.display = "flex";
				break;
			case "completed":
				if (todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;
			case "uncompleted":
				if (!todo.classList.contains("completed")) {
					todo.style.display = "flex";
				} else {
					todo.style.display = "none";
				}
				break;
		}
	});
}

function saveLocalTodos(todo) {
	//Check whether there is any todo
	let todos;
	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	todos.push(todo);
	localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
	let todos;
	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}

	todos.forEach(function (todo) {
		//Todo div
		const todoDiv = document.createElement("div");
		todoDiv.classList.add("todo");

		//New li
		const newTodo = document.createElement("li");
		newTodo.innerText = todo;
		newTodo.classList.add("todo-item");
		todoDiv.appendChild(newTodo);

		//Check mark button
		const completedButton = document.createElement("button");
		completedButton.innerHTML = '<i class="fas fa-check"></li>';
		completedButton.classList.add("complete-btn");
		todoDiv.appendChild(completedButton);

		//Check trash button
		const trashButton = document.createElement("button");
		trashButton.innerHTML = '<i class="fas fa-trash"></li>';
		trashButton.classList.add("trash-btn");
		todoDiv.appendChild(trashButton);

		//Appending to list
		todoList.appendChild(todoDiv);
	});
}

function removeLocalTodos(todo) {
	let todos;
	if (localStorage.getItem("todos") === null) {
		todos = [];
	} else {
		todos = JSON.parse(localStorage.getItem("todos"));
	}
	const todoIndex = todo.children[0].innerText;
	todos.splice(todos.indexOf(todoIndex), 1);
	localStorage.setItem('todos', JSON.stringify(todos));
}

getNameOfVisitor();