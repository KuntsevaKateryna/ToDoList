const todoArr = [
    {name: 'firsdo morning exercises',
     duedate: '2025-01-09'   
    },
    {name: 'english',
    duedate: '2025-01-09'}
];


function addTodo () {
    const todoVal = document.querySelector('.js-input-todo');
    const name = todoVal.value;
    todoArr.push(name);
   
 console.log(todoArr);
 exposeTodoList() ;

}

function exposeTodoList() {
    let div_todo_HTML = '';
    
    for (let i=0; i<todoArr.length; i++) {
        const todo_Object = todoArr[i];
        const name = todo_Object.name;
        const dueDate = todo_Object.duedate;
        const html = `<p> ${name} ${dueDate} 
            <button 
                onclick="todoArr.splice(${i}, 1);
                exposeTodoList();">
            Delete
            </button><\p>`
        div_todo_HTML += html;
       // div_todo_HTML += `<p> ${todo_item} <\p>`
    }
    console.log(div_todo_HTML);
    document.querySelector('.js-div_todo_list').innerHTML = div_todo_HTML;
  
    document.querySelector('.js-input-todo').value = '';
}