export default class AddTodo {
    constructor() {
        this.btn = document.getElementById("add");
        this.title = document.getElementById("title");
        this.description = document.getElementById("description");
    }
    onClick(callback) {
        this.btn.onclick = () => {
            if(title.value === "" || description.value === ""){
            
                console.error("incorrecto");

            }else{
                callback(this.title.value, this.description.value);
            }
        }
    }
}