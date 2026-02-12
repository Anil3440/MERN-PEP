let list = document.createElement('ul');
document.body.appendChild(list);
list.innerHTML = '';
displayTasks();
function addTask(){
    let inputBox = document.getElementById('taskInput');
    let input = inputBox.value;
    if(localStorage.getItem('todos')===null){
        localStorage.setItem('todos',JSON.stringify([]));
    }
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.push(input);
    localStorage.setItem('todos',JSON.stringify(todos));
    list.innerHTML = '';
    displayTasks();
    inputBox.value = '';
}

function displayTasks(){
    let todos = JSON.parse(localStorage.getItem('todos'));
    todos.forEach(element => {
        let li = document.createElement('li');
        list.innerHTML += `<li>${element}</li>`
    });
}

function remTask(){
    localStorage.removeItem('todos');
    list.innerHTML = '';
}