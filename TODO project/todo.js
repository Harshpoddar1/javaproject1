let todoList = [ {
  item : 'buy milk',
  duedate : '16/07/2024',
},
{
  item : 'go to tution',
  duedate : '16/07/2024',
}

];
displayItem();

function addtodo(){
  let inputElement = document.querySelector('#todoItem');
  let dateElement = document.querySelector('#todo-date');
  let todoItem  = inputElement.value;
  let todoDate =  dateElement.value; 
  todoList.push({ item : todoItem , duedate : todoDate})
  inputElement.value = '';
  dateElement.value ='';

  displayItem();
}
function displayItem(){
  let containerElement = document.querySelector('.todo-container');
 
  let newHtml = '';
  for (let i = 0; i < todoList.length; i++){
    let {item , duedate} = todoList[i]
    newHtml += `
    
    <span>${item}</span>
     <span>${duedate}</span>
    <button class = 'btn-delete' onclick="todoList.splice(${i}, 1);
    displayItem();">Delete</button>
  
    `;
}
containerElement.innerHTML = newHtml;
}


