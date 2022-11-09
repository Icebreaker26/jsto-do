export default class Model {
    constructor() {

        this.view = null;
        this.todos = [];
        this.currentId = 1;
    }

    setView(view) {
        this.view = view;
    }

    save(){
    localStorage.setItem("todos", this.todos);
     }

    getTodos() {
        return this.todos
    }

    findTodos(id){
        return this.todos.findIndex((todo) => todo.id === id);
    }

    toggleCompleted(id) {
        const index = this.findTodos(id);
        const todo = this.todos[index];
        todo.completed = !todo.completed;
        console.log(this.todos);
    }

    addTodo(title, description) {
        const todo = {
            id: this.currentId++,
            title,
            description,
            completed: false,   
        }
        this.todos.push(todo);
        console.log(this.todos);

        return {...todo};
    }

    removeTodo(id){
        const index = this.findTodos(id);
        this.todos.splice(index, 1); 
    }
}