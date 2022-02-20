//Para que se ejecute despues de haber renderizado todo el html
document.addEventListener("DOMContentLoaded", function(){

    //zona de constantes
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const title2 = document.getElementById("title2");
    const btn = document.getElementById("add");
    const error = document.getElementById("error");
    let id = 1;

    function deleteTodo(id) {
        console.log(id);
        document.getElementById(id).remove();
    };


    btn.onclick = addTodo;
    
    function addTodo(){
        if(title.value === "" || description.value === ""){
            error.style.display = "block";
            return;
        };
            
            error.style.display = "none";

            const row = table.insertRow();
            row.setAttribute("id", id++);
            row.innerHTML =  `
                <td>${title.value}</td>
                <td>${description.value}</td>

                <td class="text-center">
                <input type="checkbox">
                </td>


                <td class="text-right">
                    <button class="btn btn-primary mb-1">
                    <i class="fa fa-pencil"></i>
                    </button>
                       
                </td>
                `;    
            
            const removeBtn = document.createElement('button');
            removeBtn.classList.add('btn', 'btn-danger','mb-1', 'ml-1');
            removeBtn.innerHTML = `<i class="fa fa-trash"></i>`;
            removeBtn.onclick = function (e) {
                
                deleteTodo(row.getAttribute('id'));

            };
            row.children[3].appendChild(removeBtn);

    };

});