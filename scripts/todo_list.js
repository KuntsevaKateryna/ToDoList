const todoArr = [];
const addButton = document.querySelector('.js-button-add');
addButton.addEventListener(
    'click',
    () =>{
        addTodo (); 
    }
);
const todoVal = document.querySelector('.js-input-todo');
todoVal.addEventListener(
    'keydown',
    (event) =>{
        if (event.key === 'Enter')
            addTodo (); 
    }
);

function addTodo () {
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
    todoArr.forEach( (value, index) => {
        const todo_Object = todoArr[index];
        const name = todo_Object.name;
        const dueDate = todo_Object.duedate;
        const html = 
            `<div> ${name}</div>
             <div>${dueDate} </div>
            <button  class="js-button-delete">
                Delete
            </button>`
        div_todo_HTML += html;
        }
    );

    console.log(div_todo_HTML);
    document.querySelector('.js-div_todo_list').innerHTML = div_todo_HTML;
    document.querySelector('.js-input-todo').value = '';

    document.querySelectorAll('.js-button-delete')
        .forEach( 
            function (deleteButton, index) {
                deleteButton.addEventListener(
                    'click',
                    ()=> {
                        todoArr.splice(index, 1);
                        exposeTodoList();
                    });
            });
    }
