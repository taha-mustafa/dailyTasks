let inputId = document.getElementById('task-field');
let listId = document.getElementById('list-container');

/* Direct Focusing */
window.onload = function () {
  inputId.focus();
}

/* Time To Make The Adding Task */
function addYourDailyTask() {
  if(inputId.value === '') {
    alert("Tasks Field Can't be Empty, Enter a Task!");
  } else {
    let newLi = document.createElement('li');
    newLi.innerHTML = inputId.value;
    listId.appendChild(newLi);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '\u00d7';
    newLi.appendChild(deleteBtn);
  }
  inputId.value = '';
  inputId.focus();

  /* Call Local Storage FNC */
  localStorageTasks();
}

/* Time For Checking */
listId.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');

    /* Call Local Storage FNC */
    localStorageTasks();
  } else if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();

    /* Call Local Storage FNC */
    localStorageTasks();
  }
});

/* Start Save Tasks To localStorage */
function localStorageTasks() {
  localStorage.setItem('savedTasks', listId.innerHTML);
}
/* End Save Tasks To localStorage */

/* Start Get Tasks From localStorage */
function getTasks() {
  listId.innerHTML = localStorage.getItem('savedTasks');
}
getTasks();
/* End Get Tasks From localStorage */