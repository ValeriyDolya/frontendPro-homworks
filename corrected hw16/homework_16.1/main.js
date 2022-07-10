
let inputButton = document.querySelector('.buttonAdd');
let inputedText = document.querySelector('.text');
let divClassToDoItem = document.querySelector(".toDoItems");

class TodoList {
    items = [];
    add(params) {
        const newTodoItem = new TodoItem(params);
        this.items.push(newTodoItem);
    }
};

class TodoItem {
    constructor(params) {
        this.description = params.description;
        this.checked = false;
    }
};

const newList = new TodoList ();

inputButton.addEventListener('click', () => {
    if (inputedText.value === "") {
        alert('Nothing entered!');    
    } else {
        newList.add({ description: inputedText.value});
        displayMessages();
        inputedText.value = '';
    }
});

const createTemplate = (item, index) => {
    return divClassToDoItem.innerHTML = `
        <div class="todo-item">
            <div class="discription" id= '${index}'>${item.description}</div>
            <div class="buttons">
                <input type="checkbox" class="btn-complete" id= "${index}">
            </div>
        </div>
        `
};

const displayMessages = () => {
    divClassToDoItem.innerHTML = "";
    newList.items.forEach((item, index) => {
        divClassToDoItem.innerHTML += createTemplate(item, index);  
    });  
};

function completeTask(index) {
    newList.items[index].checked = !newList.items[index].checked;
    const elem = document.getElementById([index]);
    if(newList.items[index].checked) {
        elem.classList.add("checked");
    }else {
        elem.classList.remove("checked");
    }
};

divClassToDoItem.addEventListener('change', (event) => {
        completeTask(event.target.id);
});