let todoList = [];
displayTask();

function addtoDo() {
  let inputElement = document.querySelector('#taskText');
  let inputDate = document.querySelector('#todoDate');

  let item = inputElement.value;
  let dateItem = inputDate.value;

  todoList.push({todoItem:item,dueDate:dateItem,completed:false});
  inputElement.value = '';
  inputDate.value = '';
  displayTask();
}
  function toggleCompleted(index) {
    todoList[index].completed = !todoList[index].completed;
    displayTask();
  }
function displayTask() {
  let containerEle = document.querySelector(".todoContainer");

  let newHtml = "";

  for (let i = 0; i < todoList.length; i++) {
  let {todoItem,dueDate,completed} = todoList[i];
    newHtml += `<div class="container2">
      <span class ="spanTag ${completed ? "done" : ""}">${todoItem}</span>
      <span class ="spanTag2 ${completed ? "done" : ""}">${dueDate}</span>

      <div class = "button-container">

      <button class="continueBut" onclick ="toggleCompleted(${i})" >${completed ? "undo":"Completed"}</button> 

      <button class="delbut" onclick = "todoList.splice(${i},1); displayTask();">delete</button> 
      </div>
       </div>`;
  }

  containerEle.innerHTML = newHtml;
}

