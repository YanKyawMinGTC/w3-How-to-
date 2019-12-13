var new_task = document.getElementById("new-task");
var addBtn = document.getElementById("add_btn");

var incomplete_task = document.getElementById("incomplete-tasks");
var complete_task = document.getElementById("complete-tasks");
var incomplete_task_item = incomplete_task.querySelectorAll("li");

var nothing_todo = document.getElementById("nothing_img");

// addBtn.onclick = addTask;
addBtn.addEventListener("click", addTask);
addBtn.addEventListener("click", ajaxRequest);

// by enter key
// window.onload = function () {
//   var nothing_todo = document.getElementById("nothing_img");
//   console.log(incomplete_task_item.length);
//   if (incomplete_task_item.length === 0) {
//     nothing_todo.style.display = "block";
//     console.log("block");
//   } else {
//     nothing_todo.style.display = "none";
//     console.log("none");
//   }
// }
new_task.onkeyup = function (e) {
  if (e.keyCode == 13) {
    addTask();
  }
};

function collect_data(value) {
  // console.log("collect_data()" + value);
  var list_value = document.createElement("li");
  var list_check = document.createElement("input");
  var list_label = document.createElement("label");
  var list_editvalue = document.createElement("input");
  var list_editbtn = document.createElement("button");
  var list_deletebtn = document.createElement("button");
  list_label.innerText = value;
  // input type define
  list_check.type = "checkbox";
  list_editvalue.type = "text";
  // edit btn , delete btn define
  list_editvalue.className = "edit";
  list_editbtn.innerHTML = "Edit";
  list_deletebtn.className = "delete";
  list_deletebtn.innerHTML = "Delete";


  list_value.appendChild(list_check);
  list_value.appendChild(list_label);
  list_value.appendChild(list_editvalue);
  list_value.appendChild(list_editbtn);
  list_value.appendChild(list_deletebtn);
  return list_value;
}
function addTask() {
  var list_value = collect_data(new_task.value);
  incomplete_task.appendChild(list_value);
  // if (list_value.length === 0) {
  //   nothing_todo.style.display = "block";
  // } else {
  //   nothing_todo.style.display = "none";
  // }
  // console.log(list_value);
  check_incomplete(list_value, taskCompleted);
  console.log(list_value);
  new_task.value = "";
}

// var editTask = function () {
//   alert("editTask()");
//   // console.log(this.parentNode);
//   var listItem = this.parentNode;
//   var editInput = listItem.querySelector("input[type=text]");
//   var label = listItem.querySelector("label");
//   var containsClass = listItem.classList.contains("editMode");
//   //If class of the parent is .editmode
//   if (containsClass) {
//     label.innerText = editInput.value;
//   } else {
//     editInput.value = label.innerText;
//   }
//   list_value.classList.toggle("editMode");
// }
// var deleteTask = function () {
//   console.log("deleteTask ()");

//   var listItem = this.parentNode;
//   var ul = listItem.parentNode;
//   //Remove the parent list item from the ul.
//   ul.removeChild(listItem);
// }

// var taskCompleted = function () {
//   console.log("Complete Task...");
//   var listItem = this.parentNode;
//   complete_task.appendChild(listItem);
//   bindTaskEvents(listItem, taskIncomplete);
// }
// var taskIncomplete = function () {
//   console.log("Incomplete Task...");
//   var listItem = this.parentNode;
//   incomplete_task.appendChild(listItem);
//   bindTaskEvents(listItem, taskCompleted);
// }
// var ajaxRequest = function () {
//   console.log("AJAX Request");
// }

function check_incomplete(taskListItem, checkBoxEventHandler) {
  // alert("check_incomplete fun");
  // console.log(taskListItem);

  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  editButton.onclick = editTask;
  deleteButton.onclick = deleteTask;
  checkBox.onchange = checkBoxEventHandler;
}

// for (var i = 0; i < incomplete_task.children.length; i++) {
//   bindTaskEvents(incomplete_task.children[i], taskCompleted);
// }

// for (var i = 0; i < complete_task.children.length; i++) {
//   bindTaskEvents(complete_task.children[i], taskIncomplete);
// }


var editTask = function () {
  console.log("Edit Task...");
  // console.log("Change 'edit' to 'save'");


  var listItem = this.parentNode;

  var editInput = listItem.querySelector('input[type=text]');
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
  //If class of the parent is .editmode
  if (containsClass) {

    //switch to .editmode
    //label becomes the inputs value.
    label.innerText = editInput.value;
  } else {
    editInput.value = label.innerText;
  }

  //toggle .editmode on the parent.
  listItem.classList.toggle("editMode");
}




//Delete task.
var deleteTask = function () {
  console.log("Delete Task...");

  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  //Remove the parent list item from the ul.
  ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted = function () {
  console.log("Complete Task...");

  //Append the task list item to the #completed-tasks
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



