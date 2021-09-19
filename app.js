//Selectors

const root = document.querySelector (':root');
const container = document.querySelector ('.container');
const todoContainer = document.querySelector ('.todo-container');
const todoList = document.querySelector ('.todo-list');
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');

//Event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteComplete);

//Functions

function addTodo(event) {
    //event.preventDefault prevents form from submitting
    event.preventDefault();
    //Create Todo DIV and its classes
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    //When we type in the input and submit, it should reflect the value of what we typed
    newTodo.textContent = todoInput.value;
    //Appending the todo-item into the todoDiv created above
    todoDiv.appendChild(newTodo);
    //Creating a Completed Button
    const completedButton = document.createElement('button');
    //Using innerHTML to create a class so as to display the check button
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
     //Creating a Trash Button
     const trashButton = document.createElement('button');
     //Using innerHTML to create a class so as to display the trash button
     trashButton.innerHTML = '<i class="fas fa-trash"></i>';
     trashButton.classList.add('trash-btn');
     todoDiv.appendChild(trashButton);
     //Appending the newly created todoDiv to the TASKSLIST
     todoList.appendChild(todoDiv);
     //Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'edit'
    editButton.classList.add('editButton');
    todoDiv.appendChild(editButton)
     //Clear todo INPUT VALUE
     todoInput.value= '';
     //Edit todo Input value
     //updated
    editButton.addEventListener("click", function(e) {
        e = e || window.event;
        var target = e.target
        var parentElement = target.parentElement;
        var text = parentElement.firstChild.innerHTML;
        console.log(text)
        document.querySelector(".todo-input").value = text;
        parentElement.remove ();
    })
}


function deleteComplete (e) {
    const item = e.target;
    //Delete Todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    //Complete Todo
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
