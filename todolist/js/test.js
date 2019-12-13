var taskInput = document.getElementById("new-task");//Add a new task.
var addButton = document.getElementsByTagName("button")[0];//first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks");//ul of #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks");//completed-tasks

var incomplete_task_item = incompleteTaskHolder.querySelectorAll("li");
var nothing_todo = document.getElementById("nothing_img");


var listArray = [];
//New task list item
var createNewTaskElement = function (taskString) {
  var listItem = document.createElement("li");
  var checkBox = document.createElement("input");//checkbox
  var label = document.createElement("label");//label
  var editInput = document.createElement("input");//text
  var editButton = document.createElement("button");//edit button
  var deleteButton = document.createElement("button");//delete button

  label.innerText = taskString;

  //Each elements, needs appending
  checkBox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";//innerText encodes special characters, HTML does not.
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";

  //and appending.
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
}



var addTask = function () {
  var listItem = createNewTaskElement(taskInput.value);
  if (listItem.length !== 0) {
    nothing_todo.style.display = "none";
  }
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  refreshLocal();
  taskInput.value = "";

}
// for incomplete and complete ..edit btn 
var editTask = function () {
  console.log("Edit Task...");
  var listItem = this.parentNode;
  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  if (containsClass) {
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }
  listItem.classList.toggle("editMode");
}

//Delete task.
var deleteTask = function () {
  console.log("Delete Task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);
  localStorage.removeItem('listItem');

}
//Mark task completed
var taskCompleted = function () {
  console.log("Complete Task...");
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}
var taskIncomplete = function () {
  console.log("Incomplete Task...");
  var listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}
var ajaxRequest = function () {
  console.log("AJAX Request");
}
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);
taskInput.onkeyup = function (e) {
  if (e.keyCode == 13) {
    addTask();
  }
};
window.onload = function () {
  var nothing_todo = document.getElementById("nothing_img");

  var list = localStorage.getItem('listItem');
  console.log(list);
  if (incomplete_task_item.length === 0) {
    nothing_todo.style.display = "block";
  } else {
    nothing_todo.style.display = "none";
    console.log("none");
  }
}
var refreshLocal = function (listItem) {
  var todos = listItem;
  localStorage.removeItem('todoList');
  localStorage.setItem('todos', JSON.stringify(listItem));
}

var bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}

for (var i = 0; i < incompleteTaskHolder.children.length; i++) {
  bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}
for (var i = 0; i < completedTasksHolder.children.length; i++) {
  bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}

