const todoArr = [];

function addTodo () {
    const todoVal = document.querySelector('.js-input-todo');
    const name = todoVal.value;

    const todoDate = document.querySelector('.js-input-date');
    const dueDate = todoDate.value;

    todoArr.push({
        name : name,
        duedate : dueDate});
   
 console.log(todoArr);
 exposeTodoList() ;
}

function exposeTodoList() {
    let div_todo_HTML = '';
    todoArr.forEach( function(value, index) {
        const todo_Object = todoArr[index];
        const name = todo_Object.name;
        const dueDate = todo_Object.duedate;
        const html = 
            `<div> ${name}</div>
             <div>${dueDate} </div>
            <button  class="js-button-delete"
                onclick="todoArr.splice(${index}, 1);
                exposeTodoList();">
            Delete
            </button>`
        div_todo_HTML += html;
        }

    );
    console.log(div_todo_HTML);
    document.querySelector('.js-div_todo_list').innerHTML = div_todo_HTML;
    document.querySelector('.js-input-todo').value = '';
}