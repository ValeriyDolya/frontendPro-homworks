class TodoList {
    items = [];

    completeAll() {
        this.items.forEach((item) => item.done = true);
    }

    add(params) {
        const newTodoItem = new TodoItem(params);

        this.items.push(newTodoItem);
    }
}

class TodoItem {
    constructor(params) {
        this.id = params.id;
        this.title = params.title;
        this.description = params.description;
        this.done = params.done;
    }
}

const newList = new TodoList();

newList.add({id: 12, title: 'Title0', description: 'Description0', done: false});
newList.add({id: 14, title: 'Title1', description: 'Description1', done: true});
newList.add({id: 16, title: 'Title2', description: 'Description2', done: true});

newList.completeAll();

console.log(newList.items);